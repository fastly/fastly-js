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
import HeaderResponse from '../model/HeaderResponse';
import InlineResponse200 from '../model/InlineResponse200';

/**
* Header service.
* @module api/HeaderApi
* @version 7.5.0
*/
export default class HeaderApi {

    /**
    * Constructs a new HeaderApi. 
    * @alias module:api/HeaderApi
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
     * Creates a new Header object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {module:model/String} [options.action] - Accepts a string value.
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.dst] - Header to set.
     * @param {String} [options.name] - A handle to refer to this Header object.
     * @param {String} [options.regex] - Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {String} [options.response_condition] - Optional name of a response condition to apply.
     * @param {String} [options.src] - Variable to be used as a source for the header content. Does not apply to `delete` action.
     * @param {String} [options.substitution] - Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
     * @param {module:model/String} [options.type] - Accepts a string value.
     * @param {Number} [options.ignore_if_set] - Don't add the header if it is added already. Only applies to 'set' action.
     * @param {Number} [options.priority=100] - Priority determines execution order. Lower numbers execute first.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HeaderResponse} and HTTP response
     */
    createHeaderObjectWithHttpInfo(options = {}) {
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
        'action': options['action'],
        'cache_condition': options['cache_condition'],
        'dst': options['dst'],
        'name': options['name'],
        'regex': options['regex'],
        'request_condition': options['request_condition'],
        'response_condition': options['response_condition'],
        'src': options['src'],
        'substitution': options['substitution'],
        'type': options['type'],
        'ignore_if_set': options['ignore_if_set'],
        'priority': options['priority']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = HeaderResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/header', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Creates a new Header object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {module:model/String} [options.action] - Accepts a string value.
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.dst] - Header to set.
     * @param {String} [options.name] - A handle to refer to this Header object.
     * @param {String} [options.regex] - Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {String} [options.response_condition] - Optional name of a response condition to apply.
     * @param {String} [options.src] - Variable to be used as a source for the header content. Does not apply to `delete` action.
     * @param {String} [options.substitution] - Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
     * @param {module:model/String} [options.type] - Accepts a string value.
     * @param {Number} [options.ignore_if_set] - Don't add the header if it is added already. Only applies to 'set' action.
     * @param {Number} [options.priority=100] - Priority determines execution order. Lower numbers execute first.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HeaderResponse}
     */
    createHeaderObject(options = {}) {
      return this.createHeaderObjectWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Deletes a Header object by name.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.header_name - A handle to refer to this Header object.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteHeaderObjectWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'header_name' is set.
      if (options['header_name'] === undefined || options['header_name'] === null) {
        throw new Error("Missing the required parameter 'header_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'header_name': options['header_name']
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
        '/service/{service_id}/version/{version_id}/header/{header_name}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Deletes a Header object by name.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.header_name - A handle to refer to this Header object.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteHeaderObject(options = {}) {
      return this.deleteHeaderObjectWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieves a Header object by name.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.header_name - A handle to refer to this Header object.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HeaderResponse} and HTTP response
     */
    getHeaderObjectWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'header_name' is set.
      if (options['header_name'] === undefined || options['header_name'] === null) {
        throw new Error("Missing the required parameter 'header_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'header_name': options['header_name']
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
      let returnType = HeaderResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/header/{header_name}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieves a Header object by name.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.header_name - A handle to refer to this Header object.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HeaderResponse}
     */
    getHeaderObject(options = {}) {
      return this.getHeaderObjectWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieves all Header objects for a particular Version of a Service.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/HeaderResponse>} and HTTP response
     */
    listHeaderObjectsWithHttpInfo(options = {}) {
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
      let returnType = [HeaderResponse];
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/header', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieves all Header objects for a particular Version of a Service.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/HeaderResponse>}
     */
    listHeaderObjects(options = {}) {
      return this.listHeaderObjectsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Modifies an existing Header object by name.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.header_name - A handle to refer to this Header object.
     * @param {module:model/String} [options.action] - Accepts a string value.
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.dst] - Header to set.
     * @param {String} [options.name] - A handle to refer to this Header object.
     * @param {String} [options.regex] - Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {String} [options.response_condition] - Optional name of a response condition to apply.
     * @param {String} [options.src] - Variable to be used as a source for the header content. Does not apply to `delete` action.
     * @param {String} [options.substitution] - Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
     * @param {module:model/String} [options.type] - Accepts a string value.
     * @param {Number} [options.ignore_if_set] - Don't add the header if it is added already. Only applies to 'set' action.
     * @param {Number} [options.priority=100] - Priority determines execution order. Lower numbers execute first.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HeaderResponse} and HTTP response
     */
    updateHeaderObjectWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'header_name' is set.
      if (options['header_name'] === undefined || options['header_name'] === null) {
        throw new Error("Missing the required parameter 'header_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'header_name': options['header_name']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'action': options['action'],
        'cache_condition': options['cache_condition'],
        'dst': options['dst'],
        'name': options['name'],
        'regex': options['regex'],
        'request_condition': options['request_condition'],
        'response_condition': options['response_condition'],
        'src': options['src'],
        'substitution': options['substitution'],
        'type': options['type'],
        'ignore_if_set': options['ignore_if_set'],
        'priority': options['priority']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = HeaderResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/header/{header_name}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Modifies an existing Header object by name.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.header_name - A handle to refer to this Header object.
     * @param {module:model/String} [options.action] - Accepts a string value.
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.dst] - Header to set.
     * @param {String} [options.name] - A handle to refer to this Header object.
     * @param {String} [options.regex] - Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {String} [options.response_condition] - Optional name of a response condition to apply.
     * @param {String} [options.src] - Variable to be used as a source for the header content. Does not apply to `delete` action.
     * @param {String} [options.substitution] - Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
     * @param {module:model/String} [options.type] - Accepts a string value.
     * @param {Number} [options.ignore_if_set] - Don't add the header if it is added already. Only applies to 'set' action.
     * @param {Number} [options.priority=100] - Priority determines execution order. Lower numbers execute first.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HeaderResponse}
     */
    updateHeaderObject(options = {}) {
      return this.updateHeaderObjectWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
