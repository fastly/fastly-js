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
import VclDiff from '../model/VclDiff';

/**
* VclDiff service.
* @module api/VclDiffApi
* @version 7.0.0
*/
export default class VclDiffApi {

    /**
    * Constructs a new VclDiffApi. 
    * @alias module:api/VclDiffApi
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
     * Get a comparison of the VCL changes between two service versions.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.from_version_id - The version number of the service to which changes in the generated VCL are being compared. Can either be a positive number from 1 to your maximum version or a negative number from -1 down (-1 is latest version etc).
     * @param {Number} options.to_version_id - The version number of the service from which changes in the generated VCL are being compared. Uses same numbering scheme as `from`.
     * @param {module:model/String} [options.format='text'] - Optional method to format the diff field.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VclDiff} and HTTP response
     */
    vclDiffServiceVersionsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'from_version_id' is set.
      if (options['from_version_id'] === undefined || options['from_version_id'] === null) {
        throw new Error("Missing the required parameter 'from_version_id'.");
      }
      // Verify the required parameter 'to_version_id' is set.
      if (options['to_version_id'] === undefined || options['to_version_id'] === null) {
        throw new Error("Missing the required parameter 'to_version_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'from_version_id': options['from_version_id'],
        'to_version_id': options['to_version_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'format': options['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VclDiff;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/vcl/diff/from/{from_version_id}/to/{to_version_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a comparison of the VCL changes between two service versions.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.from_version_id - The version number of the service to which changes in the generated VCL are being compared. Can either be a positive number from 1 to your maximum version or a negative number from -1 down (-1 is latest version etc).
     * @param {Number} options.to_version_id - The version number of the service from which changes in the generated VCL are being compared. Uses same numbering scheme as `from`.
     * @param {module:model/String} [options.format='text'] - Optional method to format the diff field.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VclDiff}
     */
    vclDiffServiceVersions(options = {}) {
      return this.vclDiffServiceVersionsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
