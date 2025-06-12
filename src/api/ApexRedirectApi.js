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
import ApexRedirect from '../model/ApexRedirect';
import InlineResponse200 from '../model/InlineResponse200';

/**
* ApexRedirect service.
* @module api/ApexRedirectApi
* @version 12.0.0
*/
export default class ApexRedirectApi {

    /**
    * Constructs a new ApexRedirectApi. 
    * @alias module:api/ApexRedirectApi
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
     * Create an apex redirect for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.service_id2]
     * @param {Number} [options.version]
     * @param {Date} [options.created_at] - Date and time in ISO 8601 format.
     * @param {Date} [options.deleted_at] - Date and time in ISO 8601 format.
     * @param {Date} [options.updated_at] - Date and time in ISO 8601 format.
     * @param {module:model/Number} [options.status_code] - HTTP status code used to redirect the client.
     * @param {Array.<String>} [options.domains] - Array of apex domains that should redirect to their WWW subdomain.
     * @param {Number} [options.feature_revision] - Revision number of the apex redirect feature implementation. Defaults to the most recent revision.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApexRedirect} and HTTP response
     */
    createApexRedirectWithHttpInfo(options = {}) {
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
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'service_id': options['service_id2'],
        'version': options['version'],
        'created_at': options['created_at'],
        'deleted_at': options['deleted_at'],
        'updated_at': options['updated_at'],
        'status_code': options['status_code'],
        'domains': this.apiClient.buildCollectionParam(options['domains'], 'csv'),
        'feature_revision': options['feature_revision']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ApexRedirect;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/apex-redirects', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create an apex redirect for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.service_id2]
     * @param {Number} [options.version]
     * @param {Date} [options.created_at] - Date and time in ISO 8601 format.
     * @param {Date} [options.deleted_at] - Date and time in ISO 8601 format.
     * @param {Date} [options.updated_at] - Date and time in ISO 8601 format.
     * @param {module:model/Number} [options.status_code] - HTTP status code used to redirect the client.
     * @param {Array.<String>} [options.domains] - Array of apex domains that should redirect to their WWW subdomain.
     * @param {Number} [options.feature_revision] - Revision number of the apex redirect feature implementation. Defaults to the most recent revision.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApexRedirect}
     */
    createApexRedirect(options = {}) {
      return this.createApexRedirectWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete an apex redirect by its ID.
     * @param {Object} options
     * @param {String} options.apex_redirect_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteApexRedirectWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'apex_redirect_id' is set.
      if (options['apex_redirect_id'] === undefined || options['apex_redirect_id'] === null) {
        throw new Error("Missing the required parameter 'apex_redirect_id'.");
      }

      let pathParams = {
        'apex_redirect_id': options['apex_redirect_id']
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
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/apex-redirects/{apex_redirect_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete an apex redirect by its ID.
     * @param {Object} options
     * @param {String} options.apex_redirect_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteApexRedirect(options = {}) {
      return this.deleteApexRedirectWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get an apex redirect by its ID.
     * @param {Object} options
     * @param {String} options.apex_redirect_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApexRedirect} and HTTP response
     */
    getApexRedirectWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'apex_redirect_id' is set.
      if (options['apex_redirect_id'] === undefined || options['apex_redirect_id'] === null) {
        throw new Error("Missing the required parameter 'apex_redirect_id'.");
      }

      let pathParams = {
        'apex_redirect_id': options['apex_redirect_id']
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
      let accepts = ['application/json'];
      let returnType = ApexRedirect;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/apex-redirects/{apex_redirect_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get an apex redirect by its ID.
     * @param {Object} options
     * @param {String} options.apex_redirect_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApexRedirect}
     */
    getApexRedirect(options = {}) {
      return this.getApexRedirectWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all apex redirects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ApexRedirect>} and HTTP response
     */
    listApexRedirectsWithHttpInfo(options = {}) {
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
      let accepts = ['application/json'];
      let returnType = [ApexRedirect];
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/apex-redirects', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all apex redirects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ApexRedirect>}
     */
    listApexRedirects(options = {}) {
      return this.listApexRedirectsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update an apex redirect by its ID.
     * @param {Object} options
     * @param {String} options.apex_redirect_id
     * @param {String} [options.service_id]
     * @param {Number} [options.version]
     * @param {Date} [options.created_at] - Date and time in ISO 8601 format.
     * @param {Date} [options.deleted_at] - Date and time in ISO 8601 format.
     * @param {Date} [options.updated_at] - Date and time in ISO 8601 format.
     * @param {module:model/Number} [options.status_code] - HTTP status code used to redirect the client.
     * @param {Array.<String>} [options.domains] - Array of apex domains that should redirect to their WWW subdomain.
     * @param {Number} [options.feature_revision] - Revision number of the apex redirect feature implementation. Defaults to the most recent revision.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApexRedirect} and HTTP response
     */
    updateApexRedirectWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'apex_redirect_id' is set.
      if (options['apex_redirect_id'] === undefined || options['apex_redirect_id'] === null) {
        throw new Error("Missing the required parameter 'apex_redirect_id'.");
      }

      let pathParams = {
        'apex_redirect_id': options['apex_redirect_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'service_id': options['service_id'],
        'version': options['version'],
        'created_at': options['created_at'],
        'deleted_at': options['deleted_at'],
        'updated_at': options['updated_at'],
        'status_code': options['status_code'],
        'domains': this.apiClient.buildCollectionParam(options['domains'], 'csv'),
        'feature_revision': options['feature_revision']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ApexRedirect;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/apex-redirects/{apex_redirect_id}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update an apex redirect by its ID.
     * @param {Object} options
     * @param {String} options.apex_redirect_id
     * @param {String} [options.service_id]
     * @param {Number} [options.version]
     * @param {Date} [options.created_at] - Date and time in ISO 8601 format.
     * @param {Date} [options.deleted_at] - Date and time in ISO 8601 format.
     * @param {Date} [options.updated_at] - Date and time in ISO 8601 format.
     * @param {module:model/Number} [options.status_code] - HTTP status code used to redirect the client.
     * @param {Array.<String>} [options.domains] - Array of apex domains that should redirect to their WWW subdomain.
     * @param {Number} [options.feature_revision] - Revision number of the apex redirect feature implementation. Defaults to the most recent revision.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApexRedirect}
     */
    updateApexRedirect(options = {}) {
      return this.updateApexRedirectWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
