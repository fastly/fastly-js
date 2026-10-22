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
import ArcBedrockSetupResponse from '../model/ArcBedrockSetupResponse';
import ArcError from '../model/ArcError';
import ArcModelsResponse from '../model/ArcModelsResponse';
import ArcProvidersResponse from '../model/ArcProvidersResponse';

/**
* AiRuntimeControlProviders service.
* @module api/AiRuntimeControlProvidersApi
* @version 17.0.0
*/
export default class AiRuntimeControlProvidersApi {

    /**
    * Constructs a new AiRuntimeControlProvidersApi. 
    * @alias module:api/AiRuntimeControlProvidersApi
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
     * Returns the AI Runtime Control IAM role Amazon Resource Name (ARN) and external ID to reference in your AWS account's IAM trust policy before creating an `aws-iam` [provider connection](https://www.fastly.com/documentation/reference/api/ai-runtime-control/provider-connections#arc-create-provider-connection) to Amazon Bedrock.  Requires AWS IAM authentication to be enabled on your account. If it isn't, this endpoint returns a 404 response. 
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcBedrockSetupResponse} and HTTP response
     */
    arcGetBedrockSetupWithHttpInfo(options = {}) {
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = ArcBedrockSetupResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/providers/bedrock/setup', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Returns the AI Runtime Control IAM role Amazon Resource Name (ARN) and external ID to reference in your AWS account's IAM trust policy before creating an `aws-iam` [provider connection](https://www.fastly.com/documentation/reference/api/ai-runtime-control/provider-connections#arc-create-provider-connection) to Amazon Bedrock.  Requires AWS IAM authentication to be enabled on your account. If it isn't, this endpoint returns a 404 response. 
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcBedrockSetupResponse}
     */
    arcGetBedrockSetup(options = {}) {
      return this.arcGetBedrockSetupWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Returns the models available for a specific provider.
     * @param {Object} options
     * @param {String} options.provider_id - The ID of the provider.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcModelsResponse} and HTTP response
     */
    arcGetModelsForProviderWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'provider_id' is set.
      if (options['provider_id'] === undefined || options['provider_id'] === null) {
        throw new Error("Missing the required parameter 'provider_id'.");
      }

      let pathParams = {
        'provider_id': options['provider_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = ArcModelsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/providers/{provider_id}/models', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Returns the models available for a specific provider.
     * @param {Object} options
     * @param {String} options.provider_id - The ID of the provider.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcModelsResponse}
     */
    arcGetModelsForProvider(options = {}) {
      return this.arcGetModelsForProviderWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Returns the AI providers supported by AI Runtime Control, with each provider's available models nested within.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcProvidersResponse} and HTTP response
     */
    arcGetSupportedProvidersWithHttpInfo(options = {}) {
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = ArcProvidersResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/providers', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Returns the AI providers supported by AI Runtime Control, with each provider's available models nested within.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcProvidersResponse}
     */
    arcGetSupportedProviders(options = {}) {
      return this.arcGetSupportedProvidersWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
