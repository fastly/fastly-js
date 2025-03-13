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
import TlsPrivateKey from '../model/TlsPrivateKey';
import TlsPrivateKeyResponse from '../model/TlsPrivateKeyResponse';
import TlsPrivateKeysResponse from '../model/TlsPrivateKeysResponse';

/**
* TlsPrivateKeys service.
* @module api/TlsPrivateKeysApi
* @version 10.0.0
*/
export default class TlsPrivateKeysApi {

    /**
    * Constructs a new TlsPrivateKeysApi. 
    * @alias module:api/TlsPrivateKeysApi
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
     * Create a TLS private key.
     * @param {Object} options
     * @param {module:model/TlsPrivateKey} [options.tls_private_key]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsPrivateKeyResponse} and HTTP response
     */
    createTlsKeyWithHttpInfo(options = {}) {
      let postBody = options['tls_private_key'];

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
      let returnType = TlsPrivateKeyResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/private_keys', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a TLS private key.
     * @param {Object} options
     * @param {module:model/TlsPrivateKey} [options.tls_private_key]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsPrivateKeyResponse}
     */
    createTlsKey(options = {}) {
      return this.createTlsKeyWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Destroy a TLS private key. Only private keys not already matched to any certificates can be deleted.
     * @param {Object} options
     * @param {String} options.tls_private_key_id - Alphanumeric string identifying a private Key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTlsKeyWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'tls_private_key_id' is set.
      if (options['tls_private_key_id'] === undefined || options['tls_private_key_id'] === null) {
        throw new Error("Missing the required parameter 'tls_private_key_id'.");
      }

      let pathParams = {
        'tls_private_key_id': options['tls_private_key_id']
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
        '/tls/private_keys/{tls_private_key_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Destroy a TLS private key. Only private keys not already matched to any certificates can be deleted.
     * @param {Object} options
     * @param {String} options.tls_private_key_id - Alphanumeric string identifying a private Key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteTlsKey(options = {}) {
      return this.deleteTlsKeyWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Show a TLS private key.
     * @param {Object} options
     * @param {String} options.tls_private_key_id - Alphanumeric string identifying a private Key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsPrivateKeyResponse} and HTTP response
     */
    getTlsKeyWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'tls_private_key_id' is set.
      if (options['tls_private_key_id'] === undefined || options['tls_private_key_id'] === null) {
        throw new Error("Missing the required parameter 'tls_private_key_id'.");
      }

      let pathParams = {
        'tls_private_key_id': options['tls_private_key_id']
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
      let returnType = TlsPrivateKeyResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/private_keys/{tls_private_key_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Show a TLS private key.
     * @param {Object} options
     * @param {String} options.tls_private_key_id - Alphanumeric string identifying a private Key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsPrivateKeyResponse}
     */
    getTlsKey(options = {}) {
      return this.getTlsKeyWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all TLS private keys.
     * @param {Object} options
     * @param {String} [options.filter_in_use] - Limit the returned keys to those without any matching TLS certificates. The only valid value is false.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsPrivateKeysResponse} and HTTP response
     */
    listTlsKeysWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'filter[in_use]': options['filter_in_use'],
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
      let returnType = TlsPrivateKeysResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/private_keys', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all TLS private keys.
     * @param {Object} options
     * @param {String} [options.filter_in_use] - Limit the returned keys to those without any matching TLS certificates. The only valid value is false.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsPrivateKeysResponse}
     */
    listTlsKeys(options = {}) {
      return this.listTlsKeysWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
