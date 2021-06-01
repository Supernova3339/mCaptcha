# Configuration

mcaptcha is highly configurable.

Configuration is applied/merged in the following order:

1. path to configuration file passed in via `MCAPTCHA_CONFIG`
2. `./config/default.toml`
3. `/etc/mcaptcha/config.toml`
4. environment variables.

## Setup

### Environment variables:

Setting environment variables are optional. The configuration files have
all the necessary parameters listed. By setting environment variables,
you will be overriding the values set in the configuration files.

#### Database:

| Name                                 | Value                                                         |
| ------------------------------------ | ------------------------------------------------------------- |
| `MCAPTCHA_DATEBASE_PASSWORD`            | Postgres password                                             |
| `MCAPTCHA_DATEBASE_NAME`                | Postgres database name                                        |
| `MCAPTCHA_DATEBASE_PORT`                | Postgres port                                                 |
| `MCAPTCHA_DATEBASE_HOSTNAME`            | Postgres hostmane                                             |
| `MCAPTCHA_DATEBASE_USERNAME`            | Postgres username                                             |
| `MCAPTCHA_DATEBASE_POOL`                | Postgres database connection pool size                        |
| `DATABSE_URL` (overrides above vars) | databse URL in `postgres://user:pass@host:port/dbname` format |

#### Server:

| Name                                  | Value                                               |
| ------------------------------------- | --------------------------------------------------- |
| `MCAPTCHA_SERVER_PORT`                   | The port on which you want mcaptcha to listen to       |
| `PORT`(overrides `MCAPTCHA_SERVER_PORT`) | The port on which you want mcaptcha to listen to       |
| `MCAPTCHA_SERVER_IP`                     | The IP address on which you want mcaptcha to listen to |
| `MCAPTCHA_SERVER_DOMAIN`                 | Domain under which mcaptcha will be\*                  |
| `MCAPTCHA_SERVER_COOKIE_SECRET`          | Cookie secret, must be long and random              |
| `MCAPTCHA_SERVER_ALLOW_REGISTRATION`     | `bool` that controls                                |  | registration |

\* Authentication doesn't work without `MCAPTCHA_DOMAIN` set to the correct
domain

### Configuration file location:

| Name           | Value               |
| -------------- | ------------------- |
| `MCAPTCHA_CONFIG` | Path to config file |

### Proof of work:

| Name             | Value                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------- |
| `MCAPTCHA_POW_SALT` | Salt has to be long and random                                                          |
| `MCAPTCHA_POW_GC`   | Garbage collection duration in seconds, requires tuning but 30 is a good starting point |