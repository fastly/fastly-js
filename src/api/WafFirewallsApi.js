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
import WafFirewall from '../model/WafFirewall';
import WafFirewallResponse from '../model/WafFirewallResponse';
import WafFirewallsResponse from '../model/WafFirewallsResponse';

/**
* WafFirewalls service.
* @module api/WafFirewallsApi
* @version 4.4.0
*/
export default class WafFirewallsApi {

    /**
    * Constructs a new WafFirewallsApi. 
    * @alias module:api/WafFirewallsApi
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
     * Create a firewall object for a particular service and service version using a defined `prefetch_condition` and `response`. If the `prefetch_condition` or the `response` is missing from the request body, Fastly will generate a default object on your service. 
     * @param {Object} options
     * @param {module:model/WafFirewall} [options.waf_firewall]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallResponse} and HTTP response
     */
    createWafFirewallWithHttpInfo(options = {}) {
      let postBody = options['waf_firewall'];

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
      let returnType = WafFirewallResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/waf/firewalls', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a firewall object for a particular service and service version using a defined `prefetch_condition` and `response`. If the `prefetch_condition` or the `response` is missing from the request body, Fastly will generate a default object on your service. 
     * @param {Object} options
     * @param {module:model/WafFirewall} [options.waf_firewall]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallResponse}
     */
    createWafFirewall(options = {}) {
      return this.createWafFirewallWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete the firewall object for a particular service and service version. 
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {module:model/WafFirewall} [options.waf_firewall]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteWafFirewallWithHttpInfo(options = {}) {
      let postBody = options['waf_firewall'];
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id']
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
        '/waf/firewalls/{firewall_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete the firewall object for a particular service and service version. 
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {module:model/WafFirewall} [options.waf_firewall]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteWafFirewall(options = {}) {
      return this.deleteWafFirewallWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a specific firewall object.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {String} [options.filter_service_version_number] - Limit the results returned to a specific service version.
     * @param {module:model/String} [options.include='waf_firewall_versions'] - Include related objects. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallResponse} and HTTP response
     */
    getWafFirewallWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'filter[service_version_number]': options['filter_service_version_number'],
        'include': options['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = WafFirewallResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a specific firewall object.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {String} [options.filter_service_version_number] - Limit the results returned to a specific service version.
     * @param {module:model/String} [options.include='waf_firewall_versions'] - Include related objects. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallResponse}
     */
    getWafFirewall(options = {}) {
      return this.getWafFirewallWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all firewall objects.
     * @param {Object} options
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.filter_service_id] - Limit the results returned to a specific service.
     * @param {String} [options.filter_service_version_number] - Limit the results returned to a specific service version.
     * @param {module:model/String} [options.include='waf_firewall_versions'] - Include related objects. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallsResponse} and HTTP response
     */
    listWafFirewallsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'page[number]': options['page_number'],
        'page[size]': options['page_size'],
        'filter[service_id]': options['filter_service_id'],
        'filter[service_version_number]': options['filter_service_version_number'],
        'include': options['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = WafFirewallsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/waf/firewalls', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all firewall objects.
     * @param {Object} options
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.filter_service_id] - Limit the results returned to a specific service.
     * @param {String} [options.filter_service_version_number] - Limit the results returned to a specific service version.
     * @param {module:model/String} [options.include='waf_firewall_versions'] - Include related objects. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallsResponse}
     */
    listWafFirewalls(options = {}) {
      return this.listWafFirewallsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a firewall object for a particular service and service version. Specifying a `service_version_number` is required. 
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {module:model/WafFirewall} [options.waf_firewall]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallResponse} and HTTP response
     */
    updateWafFirewallWithHttpInfo(options = {}) {
      let postBody = options['waf_firewall'];
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id']
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
      let returnType = WafFirewallResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a firewall object for a particular service and service version. Specifying a `service_version_number` is required. 
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {module:model/WafFirewall} [options.waf_firewall]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallResponse}
     */
    updateWafFirewall(options = {}) {
      return this.updateWafFirewallWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
