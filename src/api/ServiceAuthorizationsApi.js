/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineResponse2009 from '../model/InlineResponse2009';
import ServiceAuthorization from '../model/ServiceAuthorization';
import ServiceAuthorizationResponse from '../model/ServiceAuthorizationResponse';
import ServiceAuthorizationsResponse from '../model/ServiceAuthorizationsResponse';

/**
* ServiceAuthorizations service.
* @module api/ServiceAuthorizationsApi
* @version 12.1.0
*/
export default class ServiceAuthorizationsApi {

    /**
    * Constructs a new ServiceAuthorizationsApi. 
    * @alias module:api/ServiceAuthorizationsApi
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
     * Create service authorization.
     * @param {Object} options
     * @param {module:model/ServiceAuthorization} [options.service_authorization]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceAuthorizationResponse} and HTTP response
     */
    createServiceAuthorizationWithHttpInfo(options = {}) {
      let postBody = options['service_authorization'];

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json'];
      let accepts = ['application/vnd.api+json'];
      let returnType = ServiceAuthorizationResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service-authorizations', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create service authorization.
     * @param {Object} options
     * @param {module:model/ServiceAuthorization} [options.service_authorization]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceAuthorizationResponse}
     */
    createServiceAuthorization(options = {}) {
      return this.createServiceAuthorizationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete service authorization.
     * @param {Object} options
     * @param {String} options.service_authorization_id - Alphanumeric string identifying a service authorization.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteServiceAuthorizationWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_authorization_id' is set.
      if (options['service_authorization_id'] === undefined || options['service_authorization_id'] === null) {
        throw new Error("Missing the required parameter 'service_authorization_id'.");
      }

      let pathParams = {
        'service_authorization_id': options['service_authorization_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service-authorizations/{service_authorization_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete service authorization.
     * @param {Object} options
     * @param {String} options.service_authorization_id - Alphanumeric string identifying a service authorization.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteServiceAuthorization(options = {}) {
      return this.deleteServiceAuthorizationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete service authorizations.
     * @param {Object} options
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2009} and HTTP response
     */
    deleteServiceAuthorization2WithHttpInfo(options = {}) {
      let postBody = options['request_body'];

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json; ext=bulk'];
      let accepts = ['application/vnd.api+json; ext=bulk'];
      let returnType = InlineResponse2009;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service-authorizations', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete service authorizations.
     * @param {Object} options
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2009}
     */
    deleteServiceAuthorization2(options = {}) {
      return this.deleteServiceAuthorization2WithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List service authorizations.
     * @param {Object} options
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceAuthorizationsResponse} and HTTP response
     */
    listServiceAuthorizationWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'page[number]': options['page_number'],
        'page[size]': options['page_size']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = ServiceAuthorizationsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service-authorizations', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List service authorizations.
     * @param {Object} options
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceAuthorizationsResponse}
     */
    listServiceAuthorization(options = {}) {
      return this.listServiceAuthorizationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Show service authorization.
     * @param {Object} options
     * @param {String} options.service_authorization_id - Alphanumeric string identifying a service authorization.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceAuthorizationResponse} and HTTP response
     */
    showServiceAuthorizationWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_authorization_id' is set.
      if (options['service_authorization_id'] === undefined || options['service_authorization_id'] === null) {
        throw new Error("Missing the required parameter 'service_authorization_id'.");
      }

      let pathParams = {
        'service_authorization_id': options['service_authorization_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = ServiceAuthorizationResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service-authorizations/{service_authorization_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Show service authorization.
     * @param {Object} options
     * @param {String} options.service_authorization_id - Alphanumeric string identifying a service authorization.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceAuthorizationResponse}
     */
    showServiceAuthorization(options = {}) {
      return this.showServiceAuthorizationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update service authorization.
     * @param {Object} options
     * @param {String} options.service_authorization_id - Alphanumeric string identifying a service authorization.
     * @param {module:model/ServiceAuthorization} [options.service_authorization]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceAuthorizationResponse} and HTTP response
     */
    updateServiceAuthorizationWithHttpInfo(options = {}) {
      let postBody = options['service_authorization'];
      // Verify the required parameter 'service_authorization_id' is set.
      if (options['service_authorization_id'] === undefined || options['service_authorization_id'] === null) {
        throw new Error("Missing the required parameter 'service_authorization_id'.");
      }

      let pathParams = {
        'service_authorization_id': options['service_authorization_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/vnd.api+json'];
      let returnType = ServiceAuthorizationResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service-authorizations/{service_authorization_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update service authorization.
     * @param {Object} options
     * @param {String} options.service_authorization_id - Alphanumeric string identifying a service authorization.
     * @param {module:model/ServiceAuthorization} [options.service_authorization]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceAuthorizationResponse}
     */
    updateServiceAuthorization(options = {}) {
      return this.updateServiceAuthorizationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update service authorizations.
     * @param {Object} options
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceAuthorizationsResponse} and HTTP response
     */
    updateServiceAuthorization2WithHttpInfo(options = {}) {
      let postBody = options['request_body'];

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json; ext=bulk'];
      let accepts = ['application/vnd.api+json; ext=bulk'];
      let returnType = ServiceAuthorizationsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service-authorizations', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update service authorizations.
     * @param {Object} options
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceAuthorizationsResponse}
     */
    updateServiceAuthorization2(options = {}) {
      return this.updateServiceAuthorization2WithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
