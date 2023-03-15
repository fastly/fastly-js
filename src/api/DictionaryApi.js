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
import DictionaryResponse from '../model/DictionaryResponse';
import InlineResponse200 from '../model/InlineResponse200';

/**
* Dictionary service.
* @module api/DictionaryApi
* @version 3.1.1
*/
export default class DictionaryApi {

    /**
    * Constructs a new DictionaryApi. 
    * @alias module:api/DictionaryApi
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
     * Create named dictionary for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.name] - Name for the Dictionary (must start with an alphabetic character and can contain only alphanumeric characters, underscores, and whitespace).
     * @param {Boolean} [options.write_only=false] - Determines if items in the dictionary are readable or not.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DictionaryResponse} and HTTP response
     */
    createDictionaryWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': options['name'],
        'write_only': options['write_only']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = DictionaryResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/dictionary', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create named dictionary for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.name] - Name for the Dictionary (must start with an alphabetic character and can contain only alphanumeric characters, underscores, and whitespace).
     * @param {Boolean} [options.write_only=false] - Determines if items in the dictionary are readable or not.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DictionaryResponse}
     */
    createDictionary(options = {}) {
      return this.createDictionaryWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete named dictionary for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.dictionary_name - Name for the Dictionary (must start with an alphabetic character and can contain only alphanumeric characters, underscores, and whitespace).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteDictionaryWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'dictionary_name' is set.
      if (options['dictionary_name'] === undefined || options['dictionary_name'] === null) {
        throw new Error("Missing the required parameter 'dictionary_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'dictionary_name': options['dictionary_name']
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
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/dictionary/{dictionary_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete named dictionary for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.dictionary_name - Name for the Dictionary (must start with an alphabetic character and can contain only alphanumeric characters, underscores, and whitespace).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteDictionary(options = {}) {
      return this.deleteDictionaryWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieve a single dictionary by name for the version and service.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.dictionary_name - Name for the Dictionary (must start with an alphabetic character and can contain only alphanumeric characters, underscores, and whitespace).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DictionaryResponse} and HTTP response
     */
    getDictionaryWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'dictionary_name' is set.
      if (options['dictionary_name'] === undefined || options['dictionary_name'] === null) {
        throw new Error("Missing the required parameter 'dictionary_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'dictionary_name': options['dictionary_name']
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
      let returnType = DictionaryResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/dictionary/{dictionary_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a single dictionary by name for the version and service.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.dictionary_name - Name for the Dictionary (must start with an alphabetic character and can contain only alphanumeric characters, underscores, and whitespace).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DictionaryResponse}
     */
    getDictionary(options = {}) {
      return this.getDictionaryWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all dictionaries for the version of the service.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DictionaryResponse>} and HTTP response
     */
    listDictionariesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
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
      let returnType = [DictionaryResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/dictionary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all dictionaries for the version of the service.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DictionaryResponse>}
     */
    listDictionaries(options = {}) {
      return this.listDictionariesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update named dictionary for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.dictionary_name - Name for the Dictionary (must start with an alphabetic character and can contain only alphanumeric characters, underscores, and whitespace).
     * @param {String} [options.name] - Name for the Dictionary (must start with an alphabetic character and can contain only alphanumeric characters, underscores, and whitespace).
     * @param {Boolean} [options.write_only=false] - Determines if items in the dictionary are readable or not.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DictionaryResponse} and HTTP response
     */
    updateDictionaryWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'dictionary_name' is set.
      if (options['dictionary_name'] === undefined || options['dictionary_name'] === null) {
        throw new Error("Missing the required parameter 'dictionary_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'dictionary_name': options['dictionary_name']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': options['name'],
        'write_only': options['write_only']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = DictionaryResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/dictionary/{dictionary_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update named dictionary for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.dictionary_name - Name for the Dictionary (must start with an alphabetic character and can contain only alphanumeric characters, underscores, and whitespace).
     * @param {String} [options.name] - Name for the Dictionary (must start with an alphabetic character and can contain only alphanumeric characters, underscores, and whitespace).
     * @param {Boolean} [options.write_only=false] - Determines if items in the dictionary are readable or not.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DictionaryResponse}
     */
    updateDictionary(options = {}) {
      return this.updateDictionaryWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
