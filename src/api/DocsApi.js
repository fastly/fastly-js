/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* Docs service.
* @module api/DocsApi
* @version 3.0.0-beta3
*/
export default class DocsApi {

    /**
    * Constructs a new DocsApi. 
    * @alias module:api/DocsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;

        if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
            this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
        }
    }


    /**
     * Gets all documentation associated with the Fastly API.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */
    getDocsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Object];
      return this.apiClient.callApi(
        '/docs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets all documentation associated with the Fastly API.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */
    getDocs(options = {}) {
      return this.getDocsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Gets all documentation associated with a given Categorical Section where `section` is a regular_expression. Passing `invert=true` will force a return of everything that does not match the given regular expression.
     * @param {Object} options
     * @param {String} options.section - The section to search for. Supports regular expressions.
     * @param {String} options.invert - Get everything that does not match section.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    getDocsSectionWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'section' is set.
      if (options['section'] === undefined || options['section'] === null) {
        throw new Error("Missing the required parameter 'section'.");
      }
      // Verify the required parameter 'invert' is set.
      if (options['invert'] === undefined || options['invert'] === null) {
        throw new Error("Missing the required parameter 'invert'.");
      }

      let pathParams = {
        'section': options['section']
      };
      let queryParams = {
        'invert': options['invert']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/docs/section/{section}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets all documentation associated with a given Categorical Section where `section` is a regular_expression. Passing `invert=true` will force a return of everything that does not match the given regular expression.
     * @param {Object} options
     * @param {String} options.section - The section to search for. Supports regular expressions.
     * @param {String} options.invert - Get everything that does not match section.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getDocsSection(options = {}) {
      return this.getDocsSectionWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Gets all documentation relating to a given 'Subject'.
     * @param {Object} options
     * @param {String} options.subject - The subject to search for. Supports regular expressions.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    getDocsSubjectWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'subject' is set.
      if (options['subject'] === undefined || options['subject'] === null) {
        throw new Error("Missing the required parameter 'subject'.");
      }

      let pathParams = {
        'subject': options['subject']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/docs/subject/{subject}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets all documentation relating to a given 'Subject'.
     * @param {Object} options
     * @param {String} options.subject - The subject to search for. Supports regular expressions.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getDocsSubject(options = {}) {
      return this.getDocsSubjectWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
