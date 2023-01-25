/**
 * @see https://medium.com/@karenmarkosyan/how-to-manage-promises-into-dynamic-queue-with-vanilla-javascript-9d0d1f8d4df5
 */
class Queue {
  static queue = [];

  static pendingPromise = false;

  static stop = false;

  static enqueue(promise) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        promise,
        resolve,
        reject,
      });
      this.dequeue();
    });
  }

  static dequeue() {
    if (this.workingOnPromise) {
      return false;
    }

    if (this.stop) {
      this.queue = [];
      this.stop = false;
      return;
    }

    const item = this.queue.shift();
    if (!item) {
      return false;
    }

    try {
      this.workingOnPromise = true;

      item
        .promise()
        .then((value) => {
          this.workingOnPromise = false;
          item.resolve(value);
          this.dequeue();
        })
        .catch((err) => {
          this.workingOnPromise = false;
          item.reject(err);
          this.dequeue();
        });
    } catch (err) {
      this.workingOnPromise = false;
      item.reject(err);
      this.dequeue();
    }

    return true;
  }
}

const apiCall = (text, ms) =>
  new Promise((resolve) => setTimeout(() => resolve(text), ms));

const callPromise = async (text, ms) => {
  const response = await apiCall(text, ms);
  console.log(response);
};

const callQueue = (text, ms) => {
  return Queue.enqueue(() => callPromise(text, ms));
};

callQueue("1", 1000);
callQueue("2", 5000);
callQueue("3", 3000);

console.log("call everything");

/**
 * OUTPUT:
 * call everything
 * 1
 * 2
 * 3
 */
