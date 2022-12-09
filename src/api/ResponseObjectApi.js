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
import InlineResponse200 from '../model/InlineResponse200';
import ResponseObjectResponse from '../model/ResponseObjectResponse';

/**
* ResponseObject service.
* @module api/ResponseObjectApi
* @version 3.0.0
*/
export default class ResponseObjectApi {

    /**
    * Constructs a new ResponseObjectApi. 
    * @alias module:api/ResponseObjectApi
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
     * Deletes the specified Response Object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.response_object_name - Name for the request settings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteResponseObjectWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'response_object_name' is set.
      if (options['response_object_name'] === undefined || options['response_object_name'] === null) {
        throw new Error("Missing the required parameter 'response_object_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'response_object_name': options['response_object_name']
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
        '/service/{service_id}/version/{version_id}/response_object/{response_object_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes the specified Response Object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.response_object_name - Name for the request settings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteResponseObject(options = {}) {
      return this.deleteResponseObjectWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Gets the specified Response Object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.response_object_name - Name for the request settings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponseObjectResponse} and HTTP response
     */
    getResponseObjectWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'response_object_name' is set.
      if (options['response_object_name'] === undefined || options['response_object_name'] === null) {
        throw new Error("Missing the required parameter 'response_object_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'response_object_name': options['response_object_name']
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
      let returnType = ResponseObjectResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/response_object/{response_object_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets the specified Response Object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.response_object_name - Name for the request settings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseObjectResponse}
     */
    getResponseObject(options = {}) {
      return this.getResponseObjectWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Returns all Response Objects for the specified service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ResponseObjectResponse>} and HTTP response
     */
    listResponseObjectsWithHttpInfo(options = {}) {
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
      let returnType = [ResponseObjectResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/response_object', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns all Response Objects for the specified service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ResponseObjectResponse>}
     */
    listResponseObjects(options = {}) {
      return this.listResponseObjectsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
