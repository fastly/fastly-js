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
import ConfiguredProductResponse from '../model/ConfiguredProductResponse';
import EnabledProductResponse from '../model/EnabledProductResponse';
import SetConfiguration from '../model/SetConfiguration';
import SetWorkspaceId from '../model/SetWorkspaceId';

/**
* EnabledProducts service.
* @module api/EnabledProductsApi
* @version 8.0.0
*/
export default class EnabledProductsApi {

    /**
    * Constructs a new EnabledProductsApi. 
    * @alias module:api/EnabledProductsApi
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
     * Disable a product on a service. Supported product IDs: `brotli_compression`,`domain_inspector`,`fanout`,`image_optimizer`,`origin_inspector`, `websockets`, `bot_management`, `ngwaf`, `ddos_protection`, and `log_explorer_insights`.
     * @param {Object} options
     * @param {String} options.product_id
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    disableProductWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'product_id' is set.
      if (options['product_id'] === undefined || options['product_id'] === null) {
        throw new Error("Missing the required parameter 'product_id'.");
      }
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'product_id': options['product_id'],
        'service_id': options['service_id']
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
        '/enabled-products/v1/{product_id}/services/{service_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Disable a product on a service. Supported product IDs: `brotli_compression`,`domain_inspector`,`fanout`,`image_optimizer`,`origin_inspector`, `websockets`, `bot_management`, `ngwaf`, `ddos_protection`, and `log_explorer_insights`.
     * @param {Object} options
     * @param {String} options.product_id
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    disableProduct(options = {}) {
      return this.disableProductWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Enable a product on a service. Supported product IDs: `brotli_compression`,`domain_inspector`,`fanout`,`image_optimizer`,`origin_inspector`, `websockets`, `bot_management`, `ngwaf`, `ddos_protection`, and `log_explorer_insights`.
     * @param {Object} options
     * @param {String} options.product_id
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {module:model/SetWorkspaceId} [options.set_workspace_id]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EnabledProductResponse} and HTTP response
     */
    enableProductWithHttpInfo(options = {}) {
      let postBody = options['set_workspace_id'];
      // Verify the required parameter 'product_id' is set.
      if (options['product_id'] === undefined || options['product_id'] === null) {
        throw new Error("Missing the required parameter 'product_id'.");
      }
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'product_id': options['product_id'],
        'service_id': options['service_id']
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
      let returnType = EnabledProductResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/enabled-products/v1/{product_id}/services/{service_id}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Enable a product on a service. Supported product IDs: `brotli_compression`,`domain_inspector`,`fanout`,`image_optimizer`,`origin_inspector`, `websockets`, `bot_management`, `ngwaf`, `ddos_protection`, and `log_explorer_insights`.
     * @param {Object} options
     * @param {String} options.product_id
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {module:model/SetWorkspaceId} [options.set_workspace_id]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnabledProductResponse}
     */
    enableProduct(options = {}) {
      return this.enableProductWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get enabled product on a service. Supported product IDs: `brotli_compression`,`domain_inspector`,`fanout`,`image_optimizer`,`origin_inspector`, `websockets`, `bot_management`, `ngwaf`, `ddos_protection`, and `log_explorer_insights`.
     * @param {Object} options
     * @param {String} options.product_id
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EnabledProductResponse} and HTTP response
     */
    getEnabledProductWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'product_id' is set.
      if (options['product_id'] === undefined || options['product_id'] === null) {
        throw new Error("Missing the required parameter 'product_id'.");
      }
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'product_id': options['product_id'],
        'service_id': options['service_id']
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
      let returnType = EnabledProductResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/enabled-products/v1/{product_id}/services/{service_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get enabled product on a service. Supported product IDs: `brotli_compression`,`domain_inspector`,`fanout`,`image_optimizer`,`origin_inspector`, `websockets`, `bot_management`, `ngwaf`, `ddos_protection`, and `log_explorer_insights`.
     * @param {Object} options
     * @param {String} options.product_id
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnabledProductResponse}
     */
    getEnabledProduct(options = {}) {
      return this.getEnabledProductWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get configuration for an enabled product on a service. Supported product IDs: `ngwaf` and `ddos_protection`.
     * @param {Object} options
     * @param {String} options.product_id
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfiguredProductResponse} and HTTP response
     */
    getProductConfigurationWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'product_id' is set.
      if (options['product_id'] === undefined || options['product_id'] === null) {
        throw new Error("Missing the required parameter 'product_id'.");
      }
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'product_id': options['product_id'],
        'service_id': options['service_id']
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
      let returnType = ConfiguredProductResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/enabled-products/v1/{product_id}/services/{service_id}/configuration', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get configuration for an enabled product on a service. Supported product IDs: `ngwaf` and `ddos_protection`.
     * @param {Object} options
     * @param {String} options.product_id
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfiguredProductResponse}
     */
    getProductConfiguration(options = {}) {
      return this.getProductConfigurationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update configuration for an enabled product on a service. Supported product IDs: `ngwaf` and `ddos_protection`.
     * @param {Object} options
     * @param {String} options.product_id
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {module:model/SetConfiguration} [options.set_configuration]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfiguredProductResponse} and HTTP response
     */
    setProductConfigurationWithHttpInfo(options = {}) {
      let postBody = options['set_configuration'];
      // Verify the required parameter 'product_id' is set.
      if (options['product_id'] === undefined || options['product_id'] === null) {
        throw new Error("Missing the required parameter 'product_id'.");
      }
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'product_id': options['product_id'],
        'service_id': options['service_id']
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
      let returnType = ConfiguredProductResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/enabled-products/v1/{product_id}/services/{service_id}/configuration', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update configuration for an enabled product on a service. Supported product IDs: `ngwaf` and `ddos_protection`.
     * @param {Object} options
     * @param {String} options.product_id
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {module:model/SetConfiguration} [options.set_configuration]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfiguredProductResponse}
     */
    setProductConfiguration(options = {}) {
      return this.setProductConfigurationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
