import ok from "../../images/ok.png"

function PostToRegistry() {
    return (
      <div>
        <fieldset>
  <div className="ke-panel-footer flex justify-center">
    <div className="buttons-post-create-patient flex justify-center">
      <button
        type="button"
        id="post-registrations"
        className="mr-5 ml-5"
      >
        <img src={ok} className="mr-2" />
        Post to Registry
      </button>
      <div className="wait-loading-post-registration"></div>
      <button
        type="submit"
        id="createPatientBtn"
        className="mr-5 ml-5"
        disabled
      >
        <img src={ok} className="mr-2" />
        Create Patient
      </button>
    </div>
  </div>
</fieldset>

      </div>
    );
  }
  
  export default PostToRegistry;