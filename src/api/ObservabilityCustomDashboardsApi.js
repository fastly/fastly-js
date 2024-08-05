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
import CreateDashboardRequest from '../model/CreateDashboardRequest';
import Dashboard from '../model/Dashboard';
import ListDashboardsResponse from '../model/ListDashboardsResponse';
import UpdateDashboardRequest from '../model/UpdateDashboardRequest';

/**
* ObservabilityCustomDashboards service.
* @module api/ObservabilityCustomDashboardsApi
* @version 7.6.0
*/
export default class ObservabilityCustomDashboardsApi {

    /**
    * Constructs a new ObservabilityCustomDashboardsApi. 
    * @alias module:api/ObservabilityCustomDashboardsApi
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
     * Create a new dashboard
     * @param {Object} options
     * @param {module:model/CreateDashboardRequest} [options.create_dashboard_request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Dashboard} and HTTP response
     */
    createDashboardWithHttpInfo(options = {}) {
      let postBody = options['create_dashboard_request'];

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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Dashboard;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/observability/dashboards', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a new dashboard
     * @param {Object} options
     * @param {module:model/CreateDashboardRequest} [options.create_dashboard_request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Dashboard}
     */
    createDashboard(options = {}) {
      return this.createDashboardWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete an existing dashboard
     * @param {Object} options
     * @param {String} options.dashboard_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDashboardWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'dashboard_id' is set.
      if (options['dashboard_id'] === undefined || options['dashboard_id'] === null) {
        throw new Error("Missing the required parameter 'dashboard_id'.");
      }

      let pathParams = {
        'dashboard_id': options['dashboard_id']
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
        '/observability/dashboards/{dashboard_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete an existing dashboard
     * @param {Object} options
     * @param {String} options.dashboard_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDashboard(options = {}) {
      return this.deleteDashboardWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieve a dashboard by ID
     * @param {Object} options
     * @param {String} options.dashboard_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Dashboard} and HTTP response
     */
    getDashboardWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'dashboard_id' is set.
      if (options['dashboard_id'] === undefined || options['dashboard_id'] === null) {
        throw new Error("Missing the required parameter 'dashboard_id'.");
      }

      let pathParams = {
        'dashboard_id': options['dashboard_id']
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
      let returnType = Dashboard;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/observability/dashboards/{dashboard_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieve a dashboard by ID
     * @param {Object} options
     * @param {String} options.dashboard_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Dashboard}
     */
    getDashboard(options = {}) {
      return this.getDashboardWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all custom dashboards
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListDashboardsResponse} and HTTP response
     */
    listDashboardsWithHttpInfo(options = {}) {
      let postBody = null;

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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListDashboardsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/observability/dashboards', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all custom dashboards
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListDashboardsResponse}
     */
    listDashboards(options = {}) {
      return this.listDashboardsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update an existing dashboard
     * @param {Object} options
     * @param {String} options.dashboard_id
     * @param {module:model/UpdateDashboardRequest} [options.update_dashboard_request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Dashboard} and HTTP response
     */
    updateDashboardWithHttpInfo(options = {}) {
      let postBody = options['update_dashboard_request'];
      // Verify the required parameter 'dashboard_id' is set.
      if (options['dashboard_id'] === undefined || options['dashboard_id'] === null) {
        throw new Error("Missing the required parameter 'dashboard_id'.");
      }

      let pathParams = {
        'dashboard_id': options['dashboard_id']
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
      let accepts = ['application/json'];
      let returnType = Dashboard;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/observability/dashboards/{dashboard_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update an existing dashboard
     * @param {Object} options
     * @param {String} options.dashboard_id
     * @param {module:model/UpdateDashboardRequest} [options.update_dashboard_request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Dashboard}
     */
    updateDashboard(options = {}) {
      return this.updateDashboardWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
