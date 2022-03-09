const resolvers = {
    Query: {
      surveys: async (_, __, { dataSources }) => {
        const resp =  await dataSources.surveyMonkeyAPI.getSurveys();
        return resp.data;
      },
  
      surveyResponses: async (_, { surveyId }, { dataSources }) => {
        const resp =  await dataSources.surveyMonkeyAPI.getResponses(surveyId);
        return resp.data;
      },
    },
    Response: {
        questions: ({pages}) => pages[0].questions,
    },
    Answer: {
        type: (answer) => {
           if (answer.text) {
                return "text";
           }
           if (answer.choice_metadata) {
                return "rating";
           }
        },
        value: (answer) => {
            if (answer.text) {
                return answer.text;
            }
            if (answer.choice_metadata) {
                return answer.choice_metadata.weight;
            }
        }
    }
  };
  
  module.exports = resolvers;