import unittest
from io import StringIO
from unittest.mock import patch

from src.stream_writer.stdout_stream_writer import StdoutStreamWriter

class TestStdoutStreamWriter(unittest.TestCase):
    def setUp(self):
        self.stdout_patch = patch('sys.stdout', new_callable=StringIO)
        self.stdout_mock = self.stdout_patch.start()
        self.writer = StdoutStreamWriter(None)

    def tearDown(self):
        self.stdout_patch.stop()

    def test_write(self):
        lorem_ipsum_short = "Lorem ipsum dolor sit amet."
        self.writer.write(lorem_ipsum_short)
        self.assertEqual(self.stdout_mock.getvalue().strip(), lorem_ipsum_short)

if __name__ == '__main__':
    unittest.main()

