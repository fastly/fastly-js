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
import InlineResponse200 from '../model/InlineResponse200';
import ServerResponse from '../model/ServerResponse';

/**
* Server service.
* @module api/ServerApi
* @version 12.1.0
*/
export default class ServerApi {

    /**
    * Constructs a new ServerApi. 
    * @alias module:api/ServerApi
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
     * Creates a single server for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.pool_id - Alphanumeric string identifying a Pool.
     * @param {Number} [options.weight=100] - Weight (`1-100`) used to load balance this server against others.
     * @param {Number} [options.max_conn=0] - Maximum number of connections. If the value is `0`, it inherits the value from pool's `max_conn_default`.
     * @param {Number} [options.port=80] - Port number. Setting port `443` does not force TLS. Set `use_tls` in pool to force TLS.
     * @param {String} [options.address] - A hostname, IPv4, or IPv6 address for the server. Required.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Boolean} [options.disabled=false] - Allows servers to be enabled and disabled in a pool.
     * @param {String} [options.override_host='null'] - The hostname to override the Host header. Defaults to `null` meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServerResponse} and HTTP response
     */
    createPoolServerWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'pool_id' is set.
      if (options['pool_id'] === undefined || options['pool_id'] === null) {
        throw new Error("Missing the required parameter 'pool_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'pool_id': options['pool_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'weight': options['weight'],
        'max_conn': options['max_conn'],
        'port': options['port'],
        'address': options['address'],
        'comment': options['comment'],
        'disabled': options['disabled'],
        'override_host': options['override_host']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ServerResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/pool/{pool_id}/server', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Creates a single server for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.pool_id - Alphanumeric string identifying a Pool.
     * @param {Number} [options.weight=100] - Weight (`1-100`) used to load balance this server against others.
     * @param {Number} [options.max_conn=0] - Maximum number of connections. If the value is `0`, it inherits the value from pool's `max_conn_default`.
     * @param {Number} [options.port=80] - Port number. Setting port `443` does not force TLS. Set `use_tls` in pool to force TLS.
     * @param {String} [options.address] - A hostname, IPv4, or IPv6 address for the server. Required.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Boolean} [options.disabled=false] - Allows servers to be enabled and disabled in a pool.
     * @param {String} [options.override_host='null'] - The hostname to override the Host header. Defaults to `null` meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServerResponse}
     */
    createPoolServer(options = {}) {
      return this.createPoolServerWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Deletes a single server for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.pool_id - Alphanumeric string identifying a Pool.
     * @param {String} options.server_id - Alphanumeric string identifying a Server.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deletePoolServerWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'pool_id' is set.
      if (options['pool_id'] === undefined || options['pool_id'] === null) {
        throw new Error("Missing the required parameter 'pool_id'.");
      }
      // Verify the required parameter 'server_id' is set.
      if (options['server_id'] === undefined || options['server_id'] === null) {
        throw new Error("Missing the required parameter 'server_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'pool_id': options['pool_id'],
        'server_id': options['server_id']
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
        '/service/{service_id}/pool/{pool_id}/server/{server_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Deletes a single server for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.pool_id - Alphanumeric string identifying a Pool.
     * @param {String} options.server_id - Alphanumeric string identifying a Server.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deletePoolServer(options = {}) {
      return this.deletePoolServerWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Gets a single server for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.pool_id - Alphanumeric string identifying a Pool.
     * @param {String} options.server_id - Alphanumeric string identifying a Server.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServerResponse} and HTTP response
     */
    getPoolServerWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'pool_id' is set.
      if (options['pool_id'] === undefined || options['pool_id'] === null) {
        throw new Error("Missing the required parameter 'pool_id'.");
      }
      // Verify the required parameter 'server_id' is set.
      if (options['server_id'] === undefined || options['server_id'] === null) {
        throw new Error("Missing the required parameter 'server_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'pool_id': options['pool_id'],
        'server_id': options['server_id']
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
      let returnType = ServerResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/pool/{pool_id}/server/{server_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Gets a single server for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.pool_id - Alphanumeric string identifying a Pool.
     * @param {String} options.server_id - Alphanumeric string identifying a Server.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServerResponse}
     */
    getPoolServer(options = {}) {
      return this.getPoolServerWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Lists all servers for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.pool_id - Alphanumeric string identifying a Pool.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ServerResponse>} and HTTP response
     */
    listPoolServersWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'pool_id' is set.
      if (options['pool_id'] === undefined || options['pool_id'] === null) {
        throw new Error("Missing the required parameter 'pool_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'pool_id': options['pool_id']
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
      let returnType = [ServerResponse];
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/pool/{pool_id}/servers', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Lists all servers for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.pool_id - Alphanumeric string identifying a Pool.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ServerResponse>}
     */
    listPoolServers(options = {}) {
      return this.listPoolServersWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Updates a single server for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.pool_id - Alphanumeric string identifying a Pool.
     * @param {String} options.server_id - Alphanumeric string identifying a Server.
     * @param {Number} [options.weight=100] - Weight (`1-100`) used to load balance this server against others.
     * @param {Number} [options.max_conn=0] - Maximum number of connections. If the value is `0`, it inherits the value from pool's `max_conn_default`.
     * @param {Number} [options.port=80] - Port number. Setting port `443` does not force TLS. Set `use_tls` in pool to force TLS.
     * @param {String} [options.address] - A hostname, IPv4, or IPv6 address for the server. Required.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Boolean} [options.disabled=false] - Allows servers to be enabled and disabled in a pool.
     * @param {String} [options.override_host='null'] - The hostname to override the Host header. Defaults to `null` meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServerResponse} and HTTP response
     */
    updatePoolServerWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'pool_id' is set.
      if (options['pool_id'] === undefined || options['pool_id'] === null) {
        throw new Error("Missing the required parameter 'pool_id'.");
      }
      // Verify the required parameter 'server_id' is set.
      if (options['server_id'] === undefined || options['server_id'] === null) {
        throw new Error("Missing the required parameter 'server_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'pool_id': options['pool_id'],
        'server_id': options['server_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'weight': options['weight'],
        'max_conn': options['max_conn'],
        'port': options['port'],
        'address': options['address'],
        'comment': options['comment'],
        'disabled': options['disabled'],
        'override_host': options['override_host']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ServerResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/pool/{pool_id}/server/{server_id}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Updates a single server for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.pool_id - Alphanumeric string identifying a Pool.
     * @param {String} options.server_id - Alphanumeric string identifying a Server.
     * @param {Number} [options.weight=100] - Weight (`1-100`) used to load balance this server against others.
     * @param {Number} [options.max_conn=0] - Maximum number of connections. If the value is `0`, it inherits the value from pool's `max_conn_default`.
     * @param {Number} [options.port=80] - Port number. Setting port `443` does not force TLS. Set `use_tls` in pool to force TLS.
     * @param {String} [options.address] - A hostname, IPv4, or IPv6 address for the server. Required.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Boolean} [options.disabled=false] - Allows servers to be enabled and disabled in a pool.
     * @param {String} [options.override_host='null'] - The hostname to override the Host header. Defaults to `null` meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServerResponse}
     */
    updatePoolServer(options = {}) {
      return this.updatePoolServerWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
