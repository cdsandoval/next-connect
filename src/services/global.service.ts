class GlobalService {
  get port() {
    return process.env.PORT;
  }

  get environment() {
    return process.env.NODE_ENV;
  }
}

const globalService = new GlobalService();
export { globalService };
