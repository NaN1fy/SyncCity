import unittest
from test.unit.test_stdout_stream_writer import TestStdoutStreamWriter

if __name__ == '__main__':
    test_loader = unittest.TestLoader()
    test_suite = test_loader.loadTestsFromTestCase(TestStdoutStreamWriter)

    test_runner = unittest.TextTestRunner()
    test_runner.run(test_suite)
