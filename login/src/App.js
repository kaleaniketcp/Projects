import "./main.css";

function App() {
  return (
    <div class="container">
      <form>
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example1">
            Email or Username
          </label>
          <input type="email" id="form2Example1" class="form-control" />
        </div>

        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example2">
            Password
          </label>
          <input type="password" id="form2Example2" class="form-control" />
        </div>

        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
              />
              <label class="form-check-label" for="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div class="col">
            <a href="#!">Forgot Password?</a>
          </div>
        </div>

        <button type="button" class="btn btn-primary btn-block mb-4">
          SIGN IN
        </button>

        <div class="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
