def acked(err, msg):
    if err is not None:
        print(f"Message delivery failure, {msg} : {err}")
    return ''
