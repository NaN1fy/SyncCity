# SyncCity

[Progetto del corso di Ingegneria del Software 2023-2024](https://didattica.unipd.it/off/2021/LT/SC/SC1167/000ZZ/SC01103936/N0) @ [Università degli Studi di Padova](https://www.unipd.it)

Proponente: [SyncLab](https://www.synclab.it/home)

## Tecnologie utilizzate
- [Docker](https://www.docker.com): come sistema di containerizzazione;
- [pytest](https://docs.pytest.org/en/8.0.x/): framework di test Python per unit ed integration testing;
- [Apache Kafka](https://kafka.apache.org): per gestire il gathering dei dati da più fonti;
- [ClickHouse](https://clickhouse.com): come database noSql colonnare;
- [Grafana](https://grafana.com): come piattaforma di data visualization delle informazioni. 

## Utilizzo

### Creazione container Docker 
Per l'avvio tramite Docker, è possibile utilizare il seguente comando `docker-compose --profile my-profile up` dove `--profile`seleziona i profili da avviare specificati nel `docker-compose.yaml`.
```yml
services:
  pymocksensors:
    ...
    profiles: ["dev"]

```
#### Eseguire il container in background
```bash
docker-compose --profile my-profile -d
```
#### Forzare la creazione e la build del container
```bash
docker-compose --profile my-profile --build --force-recreate
```
### Impostazione variabili d'ambiente
