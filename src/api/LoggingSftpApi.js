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
import LoggingSftpResponse from '../model/LoggingSftpResponse';

/**
* LoggingSftp service.
* @module api/LoggingSftpApi
* @version 6.1.0
*/
export default class LoggingSftpApi {

    /**
    * Constructs a new LoggingSftpApi. 
    * @alias module:api/LoggingSftpApi
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
     * Create a SFTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
     * @param {module:model/String} [options.message_type='classic'] - How the message should be formatted.
     * @param {String} [options.timestamp_format] - A timestamp format
     * @param {module:model/String} [options.compression_codec] - The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {Number} [options.gzip_level=0] - The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {String} [options.address] - A hostname or IPv4 address.
     * @param {Number} [options.port=22] - The port number.
     * @param {String} [options.password] - The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.secret_key='null'] - The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
     * @param {String} [options.ssh_known_hosts] - A list of host keys for all hosts we can connect to over SFTP.
     * @param {String} [options.user] - The username for the server.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingSftpResponse} and HTTP response
     */
    createLogSftpWithHttpInfo(options = {}) {
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
        'response_condition': options['response_condition'],
        'format': options['format'],
        'format_version': options['format_version'],
        'message_type': options['message_type'],
        'timestamp_format': options['timestamp_format'],
        'compression_codec': options['compression_codec'],
        'period': options['period'],
        'gzip_level': options['gzip_level'],
        'address': options['address'],
        'port': options['port'],
        'password': options['password'],
        'path': options['path'],
        'public_key': options['public_key'],
        'secret_key': options['secret_key'],
        'ssh_known_hosts': options['ssh_known_hosts'],
        'user': options['user']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingSftpResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/sftp', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a SFTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
     * @param {module:model/String} [options.message_type='classic'] - How the message should be formatted.
     * @param {String} [options.timestamp_format] - A timestamp format
     * @param {module:model/String} [options.compression_codec] - The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {Number} [options.gzip_level=0] - The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {String} [options.address] - A hostname or IPv4 address.
     * @param {Number} [options.port=22] - The port number.
     * @param {String} [options.password] - The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.secret_key='null'] - The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
     * @param {String} [options.ssh_known_hosts] - A list of host keys for all hosts we can connect to over SFTP.
     * @param {String} [options.user] - The username for the server.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingSftpResponse}
     */
    createLogSftp(options = {}) {
      return this.createLogSftpWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete the SFTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_sftp_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteLogSftpWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_sftp_name' is set.
      if (options['logging_sftp_name'] === undefined || options['logging_sftp_name'] === null) {
        throw new Error("Missing the required parameter 'logging_sftp_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_sftp_name': options['logging_sftp_name']
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
        '/service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete the SFTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_sftp_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteLogSftp(options = {}) {
      return this.deleteLogSftpWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get the SFTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_sftp_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingSftpResponse} and HTTP response
     */
    getLogSftpWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_sftp_name' is set.
      if (options['logging_sftp_name'] === undefined || options['logging_sftp_name'] === null) {
        throw new Error("Missing the required parameter 'logging_sftp_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_sftp_name': options['logging_sftp_name']
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
      let returnType = LoggingSftpResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get the SFTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_sftp_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingSftpResponse}
     */
    getLogSftp(options = {}) {
      return this.getLogSftpWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all of the SFTPs for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoggingSftpResponse>} and HTTP response
     */
    listLogSftpWithHttpInfo(options = {}) {
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
      let returnType = [LoggingSftpResponse];
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/sftp', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all of the SFTPs for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoggingSftpResponse>}
     */
    listLogSftp(options = {}) {
      return this.listLogSftpWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update the SFTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_sftp_name - The name for the real-time logging configuration.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
     * @param {module:model/String} [options.message_type='classic'] - How the message should be formatted.
     * @param {String} [options.timestamp_format] - A timestamp format
     * @param {module:model/String} [options.compression_codec] - The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {Number} [options.gzip_level=0] - The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {String} [options.address] - A hostname or IPv4 address.
     * @param {Number} [options.port=22] - The port number.
     * @param {String} [options.password] - The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.secret_key='null'] - The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
     * @param {String} [options.ssh_known_hosts] - A list of host keys for all hosts we can connect to over SFTP.
     * @param {String} [options.user] - The username for the server.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingSftpResponse} and HTTP response
     */
    updateLogSftpWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_sftp_name' is set.
      if (options['logging_sftp_name'] === undefined || options['logging_sftp_name'] === null) {
        throw new Error("Missing the required parameter 'logging_sftp_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_sftp_name': options['logging_sftp_name']
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
        'response_condition': options['response_condition'],
        'format': options['format'],
        'format_version': options['format_version'],
        'message_type': options['message_type'],
        'timestamp_format': options['timestamp_format'],
        'compression_codec': options['compression_codec'],
        'period': options['period'],
        'gzip_level': options['gzip_level'],
        'address': options['address'],
        'port': options['port'],
        'password': options['password'],
        'path': options['path'],
        'public_key': options['public_key'],
        'secret_key': options['secret_key'],
        'ssh_known_hosts': options['ssh_known_hosts'],
        'user': options['user']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingSftpResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update the SFTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_sftp_name - The name for the real-time logging configuration.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
     * @param {module:model/String} [options.message_type='classic'] - How the message should be formatted.
     * @param {String} [options.timestamp_format] - A timestamp format
     * @param {module:model/String} [options.compression_codec] - The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {Number} [options.gzip_level=0] - The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {String} [options.address] - A hostname or IPv4 address.
     * @param {Number} [options.port=22] - The port number.
     * @param {String} [options.password] - The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.secret_key='null'] - The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
     * @param {String} [options.ssh_known_hosts] - A list of host keys for all hosts we can connect to over SFTP.
     * @param {String} [options.user] - The username for the server.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingSftpResponse}
     */
    updateLogSftp(options = {}) {
      return this.updateLogSftpWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
