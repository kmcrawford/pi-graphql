const { RESTDataSource } = require('apollo-datasource-rest');

class SurveyMonkeyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.surveymonkey.net/v3/';
  }
  willSendRequest(request) {

    request.headers.set('Authorization', `bearer ${process.env.SURVEY_API_TOKEN}`)
   }
  getSurveys() {
    return this.get('surveys');
  }

  getResponses(surveyId) {
    return this.get(`surveys/${surveyId}/responses/bulk`);
  }
}

module.exports = SurveyMonkeyAPI;