from typing import Union

import tensorflow as tf


class EpochEnd(tf.keras.callbacks.Callback):
    def __init__(self, schedule: Union[int, list]):
        super(EpochEnd, self).__init__()
        self.schedule = schedule
        self.start_time = None
        self.end_time = None

        self.is_int = False
        self.is_list = False
        if isinstance(self.schedule, int):
            self.is_int = True
        elif isinstance(self.schedule, list):
            self.is_list = True
        else:
            raise ValueError(
                "schedule should either be an integer or a list of integers"
            )

        if self.is_list:
            try:
                self.schedule = list(map(int, self.schedule))
            except (ValueError, TypeError) as err:
                raise Exception(
                    "All elements in the list should be convertible to int: {}".format(
                        err
                    )
                )

    def on_epoch_begin(self, epoch, logs=None):
        self.start_time = tf.timestamp()

    def on_epoch_end(self, epoch: int, logs: dict = None):
        self.end_time = tf.timestamp()
        if self.is_int:
            if (epoch + 1) % self.schedule == 0:
                data = logs
                data["epoch"] = epoch
        if self.is_list:
            if (epoch + 1) in self.schedule:
                data = logs
                data["epoch"] = epoch

        # Use Python built in functions to allow using in @tf.function see
        # https://github.com/tensorflow/tensorflow/issues/27491#issuecomment-890887810
        float(self.end_time - self.start_time)
