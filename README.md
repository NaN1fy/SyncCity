# SyncCity (temporaneo)

## PyMockSensors

Questo è un README temporaneo per la branch `dev`, in attesa della creazione di un README completo, prevista per la fine dello sprint il `2024-04-19`.

### Avvio del servizio con Docker

Assicurati di avere Docker installato sulla tua macchina. Puoi trovare le istruzioni per l'installazione sul [sito web di Docker](https://docs.docker.com/get-docker/).

Una volta installato, puoi avviare il servizio PyMockSensors eseguendo i seguenti passaggi:

1. Apri un terminale.
2. Naviga nella directory del progetto.
3. Esegui il seguente comando:
4. 
    ```bash
    docker-compose --profile dev up -d
    ```
    Dove `--detach, -d` esegue i container in background. Secondo le necessità puoi aggiungere `--force-recreate` e `--build` per forzare nuovamente la costruzione dei container.
