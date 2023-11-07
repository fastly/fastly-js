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
import WafFirewallVersion from '../model/WafFirewallVersion';
import WafFirewallVersionResponse from '../model/WafFirewallVersionResponse';
import WafFirewallVersionsResponse from '../model/WafFirewallVersionsResponse';

/**
* WafFirewallVersions service.
* @module api/WafFirewallVersionsApi
* @version 6.2.2
*/
export default class WafFirewallVersionsApi {

    /**
    * Constructs a new WafFirewallVersionsApi. 
    * @alias module:api/WafFirewallVersionsApi
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
     * Clone a specific, existing firewall version into a new, draft firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallVersionResponse} and HTTP response
     */
    cloneWafFirewallVersionWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'firewall_version_number' is set.
      if (options['firewall_version_number'] === undefined || options['firewall_version_number'] === null) {
        throw new Error("Missing the required parameter 'firewall_version_number'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'firewall_version_number': options['firewall_version_number']
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
      let returnType = WafFirewallVersionResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/clone', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Clone a specific, existing firewall version into a new, draft firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallVersionResponse}
     */
    cloneWafFirewallVersion(options = {}) {
      return this.cloneWafFirewallVersionWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Create a new, draft firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {module:model/WafFirewallVersion} [options.waf_firewall_version]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallVersionResponse} and HTTP response
     */
    createWafFirewallVersionWithHttpInfo(options = {}) {
      let postBody = options['waf_firewall_version'];
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
      let returnType = WafFirewallVersionResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a new, draft firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {module:model/WafFirewallVersion} [options.waf_firewall_version]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallVersionResponse}
     */
    createWafFirewallVersion(options = {}) {
      return this.createWafFirewallVersionWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Deploy or activate a specific firewall version. If a firewall has been disabled, deploying a firewall version will automatically enable the firewall again.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deployActivateWafFirewallVersionWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'firewall_version_number' is set.
      if (options['firewall_version_number'] === undefined || options['firewall_version_number'] === null) {
        throw new Error("Missing the required parameter 'firewall_version_number'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'firewall_version_number': options['firewall_version_number']
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
        '/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/activate', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Deploy or activate a specific firewall version. If a firewall has been disabled, deploying a firewall version will automatically enable the firewall again.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deployActivateWafFirewallVersion(options = {}) {
      return this.deployActivateWafFirewallVersionWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get details about a specific firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_firewall` and `waf_active_rules`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallVersionResponse} and HTTP response
     */
    getWafFirewallVersionWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'firewall_version_number' is set.
      if (options['firewall_version_number'] === undefined || options['firewall_version_number'] === null) {
        throw new Error("Missing the required parameter 'firewall_version_number'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'firewall_version_number': options['firewall_version_number']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'include': options['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = WafFirewallVersionResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{firewall_version_number}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get details about a specific firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_firewall` and `waf_active_rules`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallVersionResponse}
     */
    getWafFirewallVersion(options = {}) {
      return this.getWafFirewallVersionWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a list of firewall versions associated with a specific firewall.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {String} [options.include] - Include relationships. Optional.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallVersionsResponse} and HTTP response
     */
    listWafFirewallVersionsWithHttpInfo(options = {}) {
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
        'include': options['include'],
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
      let returnType = WafFirewallVersionsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a list of firewall versions associated with a specific firewall.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {String} [options.include] - Include relationships. Optional.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallVersionsResponse}
     */
    listWafFirewallVersions(options = {}) {
      return this.listWafFirewallVersionsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a specific firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @param {module:model/WafFirewallVersion} [options.waf_firewall_version]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallVersionResponse} and HTTP response
     */
    updateWafFirewallVersionWithHttpInfo(options = {}) {
      let postBody = options['waf_firewall_version'];
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'firewall_version_number' is set.
      if (options['firewall_version_number'] === undefined || options['firewall_version_number'] === null) {
        throw new Error("Missing the required parameter 'firewall_version_number'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'firewall_version_number': options['firewall_version_number']
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
      let returnType = WafFirewallVersionResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{firewall_version_number}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a specific firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @param {module:model/WafFirewallVersion} [options.waf_firewall_version]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallVersionResponse}
     */
    updateWafFirewallVersion(options = {}) {
      return this.updateWafFirewallVersionWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
