import os

from src.stream_writer.stdout_stream_writer import StdoutStreamWriter

STDOUT = StdoutStreamWriter
INDENT_JSON = os.environ.get("INDENT_JSON", False)
