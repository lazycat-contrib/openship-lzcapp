import net from "node:net";

const retryIntervalMs = 1_000;
const connectionTimeoutMs = 2_000;
const deadline = Date.now() + Number(process.env.OPENSHIP_DEPENDENCY_TIMEOUT_MS ?? 120_000);

const dependencies = [
  dependencyFromUrl("PostgreSQL", "DATABASE_URL", 5432),
  dependencyFromUrl("Redis", "REDIS_URL", 6379),
];

for (const dependency of dependencies) {
  await waitForConnection(dependency);
}

function dependencyFromUrl(name, environmentVariable, defaultPort) {
  const value = process.env[environmentVariable];
  if (!value) {
    throw new Error(`${environmentVariable} is required`);
  }

  const url = new URL(value);
  return {
    name,
    host: url.hostname,
    port: Number(url.port || defaultPort),
  };
}

async function waitForConnection(dependency) {
  console.log(`[startup] Waiting for ${dependency.name} at ${dependency.host}:${dependency.port}`);

  while (Date.now() < deadline) {
    if (await canConnect(dependency)) {
      console.log(`[startup] ${dependency.name} is reachable`);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, retryIntervalMs));
  }

  throw new Error(
    `${dependency.name} did not become reachable at ${dependency.host}:${dependency.port} before startup timeout`,
  );
}

function canConnect({ host, port }) {
  return new Promise((resolve) => {
    const socket = net.createConnection({ host, port });
    let settled = false;

    const finish = (connected) => {
      if (settled) return;
      settled = true;
      socket.destroy();
      resolve(connected);
    };

    socket.setTimeout(connectionTimeoutMs);
    socket.once("connect", () => finish(true));
    socket.once("error", () => finish(false));
    socket.once("timeout", () => finish(false));
  });
}
