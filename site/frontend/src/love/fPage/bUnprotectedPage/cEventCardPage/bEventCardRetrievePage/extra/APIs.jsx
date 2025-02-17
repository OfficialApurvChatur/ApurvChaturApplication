import { toast } from "react-toastify";
import API from "src/love/aAPI/API";
import clearFormObject from "src/love/dFunction/aClearFormObject";
import loading from "src/love/dFunction/fLoading";
import FinalRouteName from "src/love/gRoute/FinalRouteName";


const APIs = {
  // Event Retrieve API
  RetrieveAPI: (Redux, ReduxUltimate, id) => {
    loading(ReduxUltimate, true)

    API.GlobalAPI.UnprotectedAPI.EventCardAPI.RetrieveAPI({ id })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
					...Redux.state.ReceivedObject,
					EventCardRetrieve: {
							image: serverResponse.retrieve.aImage,
							title: serverResponse.retrieve.aTitle,
							subtitle: serverResponse.retrieve.aSubtitle,
              description: serverResponse.retrieve.aDescription,

              detail: serverResponse.retrieve.dDetail,
              links: serverResponse.retrieve.dLinks,
              date: serverResponse.retrieve.dDate,
              references: serverResponse.retrieve.dReferences,
						}
				}})
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
    })
    .finally(() => loading(ReduxUltimate, false) );
  },

}

export default APIs