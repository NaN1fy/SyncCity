import unittest
from io import StringIO
from unittest.mock import patch
from src.stream_writer.stdout_stream_writer import StdoutStreamWriter

class TestStdoutStreamWriter(unittest.TestCase):
    """
    Test class for the StdoutStreamWriter class.

    Test methods:
        setUp(): Prepares the test environment.
        tearDown(): Cleans up the test environment.
        test_write(): Verifies that the write method correctly writes to standard output.
    """

    def setUp(self):
        """
        Prepares the test environment.
        """

        self.stdout_patch = patch('sys.stdout', new_callable=StringIO)
        self.stdout_mock = self.stdout_patch.start()
        self.writer = StdoutStreamWriter()

    def tearDown(self):
        """
        Cleans up the test environment.
        """

        self.stdout_patch.stop()

    def test_write(self):
        """
        Verifies that the write method correctly writes to standard output.
        """

        # Define the test message
        lorem_ipsum_short = "Lorem ipsum dolor sit amet."
        # Call the function under test
        self.writer.write(lorem_ipsum_short)
        # Verify the output using the sys.stdout mock
        self.assertEqual(self.stdout_mock.getvalue().strip(), lorem_ipsum_short)

if __name__ == '__main__':
    unittest.main()

