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
* IamServiceGroups service.
* @module api/IamServiceGroupsApi
* @version 4.2.2
*/
export default class IamServiceGroupsApi {

    /**
    * Constructs a new IamServiceGroupsApi. 
    * @alias module:api/IamServiceGroupsApi
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
     * Delete a service group.
     * @param {Object} options
     * @param {String} options.service_group_id - Alphanumeric string identifying the service group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteAServiceGroupWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_group_id' is set.
      if (options['service_group_id'] === undefined || options['service_group_id'] === null) {
        throw new Error("Missing the required parameter 'service_group_id'.");
      }

      let pathParams = {
        'service_group_id': options['service_group_id']
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
        '/service-groups/{service_group_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete a service group.
     * @param {Object} options
     * @param {String} options.service_group_id - Alphanumeric string identifying the service group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteAServiceGroup(options = {}) {
      return this.deleteAServiceGroupWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a service group.
     * @param {Object} options
     * @param {String} options.service_group_id - Alphanumeric string identifying the service group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getAServiceGroupWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_group_id' is set.
      if (options['service_group_id'] === undefined || options['service_group_id'] === null) {
        throw new Error("Missing the required parameter 'service_group_id'.");
      }

      let pathParams = {
        'service_group_id': options['service_group_id']
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
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service-groups/{service_group_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a service group.
     * @param {Object} options
     * @param {String} options.service_group_id - Alphanumeric string identifying the service group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getAServiceGroup(options = {}) {
      return this.getAServiceGroupWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List services to a service group.
     * @param {Object} options
     * @param {String} options.service_group_id - Alphanumeric string identifying the service group.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {Number} [options.page] - Current page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    listServiceGroupServicesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_group_id' is set.
      if (options['service_group_id'] === undefined || options['service_group_id'] === null) {
        throw new Error("Missing the required parameter 'service_group_id'.");
      }

      let pathParams = {
        'service_group_id': options['service_group_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'per_page': options['per_page'],
        'page': options['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service-groups/{service_group_id}/services', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List services to a service group.
     * @param {Object} options
     * @param {String} options.service_group_id - Alphanumeric string identifying the service group.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {Number} [options.page] - Current page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    listServiceGroupServices(options = {}) {
      return this.listServiceGroupServicesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all service groups.
     * @param {Object} options
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {Number} [options.page] - Current page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    listServiceGroupsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'per_page': options['per_page'],
        'page': options['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service-groups', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all service groups.
     * @param {Object} options
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {Number} [options.page] - Current page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    listServiceGroups(options = {}) {
      return this.listServiceGroupsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
