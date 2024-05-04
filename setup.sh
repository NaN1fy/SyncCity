#!/bin/bash

# Scarica il plugin ClickHouse
grafana-cli --pluginsDir "/var/lib/grafana/plugins" plugins install vertamedia-clickhouse-datasource

# Riavvia il servizio Grafana
docker-compose restart grafana