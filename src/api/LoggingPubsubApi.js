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
import InlineResponse200 from '../model/InlineResponse200';
import LoggingGooglePubsubResponse from '../model/LoggingGooglePubsubResponse';

/**
* LoggingPubsub service.
* @module api/LoggingPubsubApi
* @version 4.1.0
*/
export default class LoggingPubsubApi {

    /**
    * Constructs a new LoggingPubsubApi. 
    * @alias module:api/LoggingPubsubApi
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
     * Create a Pub/Sub logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {String} [options.user] - Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Not required if `account_name` is specified.
     * @param {String} [options.secret_key] - Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Not required if `account_name` is specified.
     * @param {String} [options.account_name] - The name of the Google Cloud Platform service account associated with the target log collection service. Not required if `user` and `secret_key` are provided.
     * @param {String} [options.topic] - The Google Cloud Pub/Sub topic to which logs will be published. Required.
     * @param {String} [options.project_id] - Your Google Cloud Platform project ID. Required
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingGooglePubsubResponse} and HTTP response
     */
    createLogGcpPubsubWithHttpInfo(options = {}) {
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
        'name': options['name'],
        'placement': options['placement'],
        'format_version': options['format_version'],
        'response_condition': options['response_condition'],
        'format': options['format'],
        'user': options['user'],
        'secret_key': options['secret_key'],
        'account_name': options['account_name'],
        'topic': options['topic'],
        'project_id': options['project_id']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingGooglePubsubResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/pubsub', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Pub/Sub logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {String} [options.user] - Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Not required if `account_name` is specified.
     * @param {String} [options.secret_key] - Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Not required if `account_name` is specified.
     * @param {String} [options.account_name] - The name of the Google Cloud Platform service account associated with the target log collection service. Not required if `user` and `secret_key` are provided.
     * @param {String} [options.topic] - The Google Cloud Pub/Sub topic to which logs will be published. Required.
     * @param {String} [options.project_id] - Your Google Cloud Platform project ID. Required
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingGooglePubsubResponse}
     */
    createLogGcpPubsub(options = {}) {
      return this.createLogGcpPubsubWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a Pub/Sub logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_google_pubsub_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteLogGcpPubsubWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_google_pubsub_name' is set.
      if (options['logging_google_pubsub_name'] === undefined || options['logging_google_pubsub_name'] === null) {
        throw new Error("Missing the required parameter 'logging_google_pubsub_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_google_pubsub_name': options['logging_google_pubsub_name']
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
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Pub/Sub logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_google_pubsub_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteLogGcpPubsub(options = {}) {
      return this.deleteLogGcpPubsubWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get the details for a Pub/Sub logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_google_pubsub_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingGooglePubsubResponse} and HTTP response
     */
    getLogGcpPubsubWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_google_pubsub_name' is set.
      if (options['logging_google_pubsub_name'] === undefined || options['logging_google_pubsub_name'] === null) {
        throw new Error("Missing the required parameter 'logging_google_pubsub_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_google_pubsub_name': options['logging_google_pubsub_name']
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
      let returnType = LoggingGooglePubsubResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the details for a Pub/Sub logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_google_pubsub_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingGooglePubsubResponse}
     */
    getLogGcpPubsub(options = {}) {
      return this.getLogGcpPubsubWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all of the Pub/Sub logging objects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoggingGooglePubsubResponse>} and HTTP response
     */
    listLogGcpPubsubWithHttpInfo(options = {}) {
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
      let returnType = [LoggingGooglePubsubResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/pubsub', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all of the Pub/Sub logging objects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoggingGooglePubsubResponse>}
     */
    listLogGcpPubsub(options = {}) {
      return this.listLogGcpPubsubWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a Pub/Sub logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_google_pubsub_name - The name for the real-time logging configuration.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {String} [options.user] - Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Not required if `account_name` is specified.
     * @param {String} [options.secret_key] - Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Not required if `account_name` is specified.
     * @param {String} [options.account_name] - The name of the Google Cloud Platform service account associated with the target log collection service. Not required if `user` and `secret_key` are provided.
     * @param {String} [options.topic] - The Google Cloud Pub/Sub topic to which logs will be published. Required.
     * @param {String} [options.project_id] - Your Google Cloud Platform project ID. Required
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingGooglePubsubResponse} and HTTP response
     */
    updateLogGcpPubsubWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_google_pubsub_name' is set.
      if (options['logging_google_pubsub_name'] === undefined || options['logging_google_pubsub_name'] === null) {
        throw new Error("Missing the required parameter 'logging_google_pubsub_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_google_pubsub_name': options['logging_google_pubsub_name']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': options['name'],
        'placement': options['placement'],
        'format_version': options['format_version'],
        'response_condition': options['response_condition'],
        'format': options['format'],
        'user': options['user'],
        'secret_key': options['secret_key'],
        'account_name': options['account_name'],
        'topic': options['topic'],
        'project_id': options['project_id']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingGooglePubsubResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Pub/Sub logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_google_pubsub_name - The name for the real-time logging configuration.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {String} [options.user] - Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Not required if `account_name` is specified.
     * @param {String} [options.secret_key] - Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Not required if `account_name` is specified.
     * @param {String} [options.account_name] - The name of the Google Cloud Platform service account associated with the target log collection service. Not required if `user` and `secret_key` are provided.
     * @param {String} [options.topic] - The Google Cloud Pub/Sub topic to which logs will be published. Required.
     * @param {String} [options.project_id] - Your Google Cloud Platform project ID. Required
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingGooglePubsubResponse}
     */
    updateLogGcpPubsub(options = {}) {
      return this.updateLogGcpPubsubWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
