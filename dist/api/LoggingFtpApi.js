"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingCompressionCodec = _interopRequireDefault(require("../model/LoggingCompressionCodec"));

var _LoggingFormatVersion = _interopRequireDefault(require("../model/LoggingFormatVersion"));

var _LoggingFtpResponse = _interopRequireDefault(require("../model/LoggingFtpResponse"));

var _LoggingMessageType = _interopRequireDefault(require("../model/LoggingMessageType"));

var _LoggingPlacement = _interopRequireDefault(require("../model/LoggingPlacement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LoggingFtp service.
* @module api/LoggingFtpApi
* @version 3.0.0-alpha1
*/
var LoggingFtpApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LoggingFtpApi. 
  * @alias module:api/LoggingFtpApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoggingFtpApi(apiClient) {
    _classCallCheck(this, LoggingFtpApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a FTP for a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {Number} options.version_id
   * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
   * @param {module:model/LoggingFormatVersion} [options.format_version]
   * @param {String} [options.name] - The name for the real-time logging configuration.
   * @param {module:model/LoggingPlacement} [options.placement]
   * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
   * @param {module:model/LoggingCompressionCodec} [options.compression_codec]
   * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
   * @param {module:model/LoggingMessageType} [options.message_type]
   * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
   * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
   * @param {String} [options.address] - An hostname or IPv4 address.
   * @param {String} [options.hostname] - Hostname used.
   * @param {String} [options.ipv4] - IPv4 address of the host.
   * @param {String} [options.password] - The password for the server. For anonymous use an email address.
   * @param {String} [options.path] - The path to upload log files to. If the path ends in `/` then it is treated as a directory.
   * @param {Number} [options.port=21] - The port number.
   * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
   * @param {String} [options.user] - The username for the server. Can be anonymous.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingFtpResponse} and HTTP response
   */


  _createClass(LoggingFtpApi, [{
    key: "createLogFtpWithHttpInfo",
    value: function createLogFtpWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'format': options['format'],
        'format_version': options['format_version'],
        'name': options['name'],
        'placement': options['placement'],
        'response_condition': options['response_condition'],
        'compression_codec': options['compression_codec'],
        'gzip_level': options['gzip_level'],
        'message_type': options['message_type'],
        'period': options['period'],
        'timestamp_format': options['timestamp_format'],
        'address': options['address'],
        'hostname': options['hostname'],
        'ipv4': options['ipv4'],
        'password': options['password'],
        'path': options['path'],
        'port': options['port'],
        'public_key': options['public_key'],
        'user': options['user']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingFtpResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/ftp', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a FTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {module:model/LoggingCompressionCodec} [options.compression_codec]
     * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {module:model/LoggingMessageType} [options.message_type]
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
     * @param {String} [options.address] - An hostname or IPv4 address.
     * @param {String} [options.hostname] - Hostname used.
     * @param {String} [options.ipv4] - IPv4 address of the host.
     * @param {String} [options.password] - The password for the server. For anonymous use an email address.
     * @param {String} [options.path] - The path to upload log files to. If the path ends in `/` then it is treated as a directory.
     * @param {Number} [options.port=21] - The port number.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.user] - The username for the server. Can be anonymous.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingFtpResponse}
     */

  }, {
    key: "createLogFtp",
    value: function createLogFtp() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createLogFtpWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete the FTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_ftp_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteLogFtpWithHttpInfo",
    value: function deleteLogFtpWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_ftp_name' is set.


      if (options['logging_ftp_name'] === undefined || options['logging_ftp_name'] === null) {
        throw new Error("Missing the required parameter 'logging_ftp_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_ftp_name': options['logging_ftp_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/ftp/{logging_ftp_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete the FTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_ftp_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteLogFtp",
    value: function deleteLogFtp() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteLogFtpWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the FTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_ftp_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingFtpResponse} and HTTP response
     */

  }, {
    key: "getLogFtpWithHttpInfo",
    value: function getLogFtpWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_ftp_name' is set.


      if (options['logging_ftp_name'] === undefined || options['logging_ftp_name'] === null) {
        throw new Error("Missing the required parameter 'logging_ftp_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_ftp_name': options['logging_ftp_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LoggingFtpResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/ftp/{logging_ftp_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the FTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_ftp_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingFtpResponse}
     */

  }, {
    key: "getLogFtp",
    value: function getLogFtp() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getLogFtpWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all of the FTPs for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoggingFtpResponse>} and HTTP response
     */

  }, {
    key: "listLogFtpWithHttpInfo",
    value: function listLogFtpWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_LoggingFtpResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/ftp', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all of the FTPs for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoggingFtpResponse>}
     */

  }, {
    key: "listLogFtp",
    value: function listLogFtp() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listLogFtpWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update the FTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_ftp_name
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {module:model/LoggingCompressionCodec} [options.compression_codec]
     * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {module:model/LoggingMessageType} [options.message_type]
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
     * @param {String} [options.address] - An hostname or IPv4 address.
     * @param {String} [options.hostname] - Hostname used.
     * @param {String} [options.ipv4] - IPv4 address of the host.
     * @param {String} [options.password] - The password for the server. For anonymous use an email address.
     * @param {String} [options.path] - The path to upload log files to. If the path ends in `/` then it is treated as a directory.
     * @param {Number} [options.port=21] - The port number.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.user] - The username for the server. Can be anonymous.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingFtpResponse} and HTTP response
     */

  }, {
    key: "updateLogFtpWithHttpInfo",
    value: function updateLogFtpWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_ftp_name' is set.


      if (options['logging_ftp_name'] === undefined || options['logging_ftp_name'] === null) {
        throw new Error("Missing the required parameter 'logging_ftp_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_ftp_name': options['logging_ftp_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'format': options['format'],
        'format_version': options['format_version'],
        'name': options['name'],
        'placement': options['placement'],
        'response_condition': options['response_condition'],
        'compression_codec': options['compression_codec'],
        'gzip_level': options['gzip_level'],
        'message_type': options['message_type'],
        'period': options['period'],
        'timestamp_format': options['timestamp_format'],
        'address': options['address'],
        'hostname': options['hostname'],
        'ipv4': options['ipv4'],
        'password': options['password'],
        'path': options['path'],
        'port': options['port'],
        'public_key': options['public_key'],
        'user': options['user']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingFtpResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/ftp/{logging_ftp_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the FTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_ftp_name
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {module:model/LoggingCompressionCodec} [options.compression_codec]
     * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {module:model/LoggingMessageType} [options.message_type]
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
     * @param {String} [options.address] - An hostname or IPv4 address.
     * @param {String} [options.hostname] - Hostname used.
     * @param {String} [options.ipv4] - IPv4 address of the host.
     * @param {String} [options.password] - The password for the server. For anonymous use an email address.
     * @param {String} [options.path] - The path to upload log files to. If the path ends in `/` then it is treated as a directory.
     * @param {Number} [options.port=21] - The port number.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.user] - The username for the server. Can be anonymous.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingFtpResponse}
     */

  }, {
    key: "updateLogFtp",
    value: function updateLogFtp() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateLogFtpWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoggingFtpApi;
}();

exports["default"] = LoggingFtpApi;