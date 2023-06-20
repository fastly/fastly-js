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
import Pagination from '../model/Pagination';
import Star from '../model/Star';
import StarResponse from '../model/StarResponse';

/**
* Star service.
* @module api/StarApi
* @version 4.2.0
*/
export default class StarApi {

    /**
    * Constructs a new StarApi. 
    * @alias module:api/StarApi
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
     * Create star.
     * @param {Object} options
     * @param {module:model/Star} [options.star]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StarResponse} and HTTP response
     */
    createServiceStarWithHttpInfo(options = {}) {
      let postBody = options['star'];

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
      let returnType = StarResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/stars', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create star.
     * @param {Object} options
     * @param {module:model/Star} [options.star]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StarResponse}
     */
    createServiceStar(options = {}) {
      return this.createServiceStarWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete star.
     * @param {Object} options
     * @param {String} options.star_id - Alphanumeric string identifying a star.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteServiceStarWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'star_id' is set.
      if (options['star_id'] === undefined || options['star_id'] === null) {
        throw new Error("Missing the required parameter 'star_id'.");
      }

      let pathParams = {
        'star_id': options['star_id']
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
        '/stars/{star_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete star.
     * @param {Object} options
     * @param {String} options.star_id - Alphanumeric string identifying a star.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteServiceStar(options = {}) {
      return this.deleteServiceStarWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Show star.
     * @param {Object} options
     * @param {String} options.star_id - Alphanumeric string identifying a star.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StarResponse} and HTTP response
     */
    getServiceStarWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'star_id' is set.
      if (options['star_id'] === undefined || options['star_id'] === null) {
        throw new Error("Missing the required parameter 'star_id'.");
      }

      let pathParams = {
        'star_id': options['star_id']
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
      let returnType = StarResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/stars/{star_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Show star.
     * @param {Object} options
     * @param {String} options.star_id - Alphanumeric string identifying a star.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StarResponse}
     */
    getServiceStar(options = {}) {
      return this.getServiceStarWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List stars.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Pagination} and HTTP response
     */
    listServiceStarsWithHttpInfo(options = {}) {
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
      let accepts = ['application/vnd.api+json'];
      let returnType = Pagination;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/stars', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List stars.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Pagination}
     */
    listServiceStars(options = {}) {
      return this.listServiceStarsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
