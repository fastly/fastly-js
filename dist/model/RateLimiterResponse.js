"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RateLimiter = _interopRequireDefault(require("./RateLimiter"));

var _RateLimiterResponse = _interopRequireDefault(require("./RateLimiterResponse1"));

var _RateLimiterResponseAllOf = _interopRequireDefault(require("./RateLimiterResponseAllOf"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RateLimiterResponse model module.
 * @module model/RateLimiterResponse
 * @version 3.0.0-alpha1
 */
var RateLimiterResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RateLimiterResponse</code>.
   * @alias module:model/RateLimiterResponse
   * @implements module:model/RateLimiter
   * @implements module:model/ServiceIdAndVersion
   * @implements module:model/Timestamps
   * @implements module:model/RateLimiterResponseAllOf
   */
  function RateLimiterResponse() {
    _classCallCheck(this, RateLimiterResponse);

    _RateLimiter["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    _RateLimiterResponseAllOf["default"].initialize(this);

    RateLimiterResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RateLimiterResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RateLimiterResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RateLimiterResponse} obj Optional instance to populate.
     * @return {module:model/RateLimiterResponse} The populated <code>RateLimiterResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RateLimiterResponse();

        _RateLimiter["default"].constructFromObject(data, obj);

        _ServiceIdAndVersion["default"].constructFromObject(data, obj);

        _Timestamps["default"].constructFromObject(data, obj);

        _RateLimiterResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('uri_dictionary_name')) {
          obj['uri_dictionary_name'] = _ApiClient["default"].convertToType(data['uri_dictionary_name'], 'String');
        }

        if (data.hasOwnProperty('http_methods')) {
          obj['http_methods'] = _ApiClient["default"].convertToType(data['http_methods'], ['String']);
        }

        if (data.hasOwnProperty('rps_limit')) {
          obj['rps_limit'] = _ApiClient["default"].convertToType(data['rps_limit'], 'Number');
        }

        if (data.hasOwnProperty('window_size')) {
          obj['window_size'] = _ApiClient["default"].convertToType(data['window_size'], 'Number');
        }

        if (data.hasOwnProperty('client_key')) {
          obj['client_key'] = _ApiClient["default"].convertToType(data['client_key'], ['String']);
        }

        if (data.hasOwnProperty('penalty_box_duration')) {
          obj['penalty_box_duration'] = _ApiClient["default"].convertToType(data['penalty_box_duration'], 'Number');
        }

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('response')) {
          obj['response'] = _RateLimiterResponse["default"].constructFromObject(data['response']);
        }

        if (data.hasOwnProperty('response_object_name')) {
          obj['response_object_name'] = _ApiClient["default"].convertToType(data['response_object_name'], 'String');
        }

        if (data.hasOwnProperty('logger_type')) {
          obj['logger_type'] = _ApiClient["default"].convertToType(data['logger_type'], 'String');
        }

        if (data.hasOwnProperty('feature_revision')) {
          obj['feature_revision'] = _ApiClient["default"].convertToType(data['feature_revision'], 'Number');
        }

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient["default"].convertToType(data['deleted_at'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RateLimiterResponse;
}();
/**
 * A human readable name for the rate limiting rule.
 * @member {String} name
 */


RateLimiterResponse.prototype['name'] = undefined;
/**
 * The name of an Edge Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
 * @member {String} uri_dictionary_name
 */

RateLimiterResponse.prototype['uri_dictionary_name'] = undefined;
/**
 * Array of HTTP methods to apply rate limiting to.
 * @member {Array.<module:model/RateLimiterResponse.HttpMethodsEnum>} http_methods
 */

RateLimiterResponse.prototype['http_methods'] = undefined;
/**
 * Upper limit of requests per second allowed by the rate limiter.
 * @member {Number} rps_limit
 */

RateLimiterResponse.prototype['rps_limit'] = undefined;
/**
 * Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
 * @member {module:model/RateLimiterResponse.WindowSizeEnum} window_size
 */

RateLimiterResponse.prototype['window_size'] = undefined;
/**
 * Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
 * @member {Array.<String>} client_key
 */

RateLimiterResponse.prototype['client_key'] = undefined;
/**
 * Length of time in minutes that the rate limiter is in effect after the initial violation is detected.
 * @member {Number} penalty_box_duration
 */

RateLimiterResponse.prototype['penalty_box_duration'] = undefined;
/**
 * The action to take when a rate limiter violation is detected.
 * @member {module:model/RateLimiterResponse.ActionEnum} action
 */

RateLimiterResponse.prototype['action'] = undefined;
/**
 * @member {module:model/RateLimiterResponse1} response
 */

RateLimiterResponse.prototype['response'] = undefined;
/**
 * Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
 * @member {String} response_object_name
 */

RateLimiterResponse.prototype['response_object_name'] = undefined;
/**
 * Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
 * @member {module:model/RateLimiterResponse.LoggerTypeEnum} logger_type
 */

RateLimiterResponse.prototype['logger_type'] = undefined;
/**
 * Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
 * @member {Number} feature_revision
 */

RateLimiterResponse.prototype['feature_revision'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

RateLimiterResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

RateLimiterResponse.prototype['version'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

RateLimiterResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

RateLimiterResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

RateLimiterResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the rate limiter.
 * @member {String} id
 */

RateLimiterResponse.prototype['id'] = undefined; // Implement RateLimiter interface:

/**
 * A human readable name for the rate limiting rule.
 * @member {String} name
 */

_RateLimiter["default"].prototype['name'] = undefined;
/**
 * The name of an Edge Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
 * @member {String} uri_dictionary_name
 */

_RateLimiter["default"].prototype['uri_dictionary_name'] = undefined;
/**
 * Array of HTTP methods to apply rate limiting to.
 * @member {Array.<module:model/RateLimiter.HttpMethodsEnum>} http_methods
 */

_RateLimiter["default"].prototype['http_methods'] = undefined;
/**
 * Upper limit of requests per second allowed by the rate limiter.
 * @member {Number} rps_limit
 */

_RateLimiter["default"].prototype['rps_limit'] = undefined;
/**
 * Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
 * @member {module:model/RateLimiter.WindowSizeEnum} window_size
 */

_RateLimiter["default"].prototype['window_size'] = undefined;
/**
 * Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
 * @member {Array.<String>} client_key
 */

_RateLimiter["default"].prototype['client_key'] = undefined;
/**
 * Length of time in minutes that the rate limiter is in effect after the initial violation is detected.
 * @member {Number} penalty_box_duration
 */

_RateLimiter["default"].prototype['penalty_box_duration'] = undefined;
/**
 * The action to take when a rate limiter violation is detected.
 * @member {module:model/RateLimiter.ActionEnum} action
 */

_RateLimiter["default"].prototype['action'] = undefined;
/**
 * @member {module:model/RateLimiterResponse1} response
 */

_RateLimiter["default"].prototype['response'] = undefined;
/**
 * Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
 * @member {String} response_object_name
 */

_RateLimiter["default"].prototype['response_object_name'] = undefined;
/**
 * Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
 * @member {module:model/RateLimiter.LoggerTypeEnum} logger_type
 */

_RateLimiter["default"].prototype['logger_type'] = undefined;
/**
 * Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
 * @member {Number} feature_revision
 */

_RateLimiter["default"].prototype['feature_revision'] = undefined; // Implement ServiceIdAndVersion interface:

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

_ServiceIdAndVersion["default"].prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

_ServiceIdAndVersion["default"].prototype['version'] = undefined; // Implement Timestamps interface:

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

_Timestamps["default"].prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

_Timestamps["default"].prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

_Timestamps["default"].prototype['updated_at'] = undefined; // Implement RateLimiterResponseAllOf interface:

/**
 * Alphanumeric string identifying the rate limiter.
 * @member {String} id
 */

_RateLimiterResponseAllOf["default"].prototype['id'] = undefined;
/**
 * Allowed values for the <code>http_methods</code> property.
 * @enum {String}
 * @readonly
 */

RateLimiterResponse['HttpMethodsEnum'] = {
  /**
   * value: "HEAD"
   * @const
   */
  "HEAD": "HEAD",

  /**
   * value: "OPTIONS"
   * @const
   */
  "OPTIONS": "OPTIONS",

  /**
   * value: "GET"
   * @const
   */
  "GET": "GET",

  /**
   * value: "POST"
   * @const
   */
  "POST": "POST",

  /**
   * value: "PUT"
   * @const
   */
  "PUT": "PUT",

  /**
   * value: "PATCH"
   * @const
   */
  "PATCH": "PATCH",

  /**
   * value: "DELETE"
   * @const
   */
  "DELETE": "DELETE",

  /**
   * value: "TRACE"
   * @const
   */
  "TRACE": "TRACE"
};
/**
 * Allowed values for the <code>window_size</code> property.
 * @enum {Number}
 * @readonly
 */

RateLimiterResponse['WindowSizeEnum'] = {
  /**
   * value: 1
   * @const
   */
  "one_second": 1,

  /**
   * value: 10
   * @const
   */
  "ten_seconds": 10,

  /**
   * value: 60
   * @const
   */
  "one_minute": 60
};
/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */

RateLimiterResponse['ActionEnum'] = {
  /**
   * value: "response"
   * @const
   */
  "response": "response",

  /**
   * value: "response_object"
   * @const
   */
  "response_object": "response_object",

  /**
   * value: "log_only"
   * @const
   */
  "log_only": "log_only"
};
/**
 * Allowed values for the <code>logger_type</code> property.
 * @enum {String}
 * @readonly
 */

RateLimiterResponse['LoggerTypeEnum'] = {
  /**
   * value: "azureblob"
   * @const
   */
  "azureblob": "azureblob",

  /**
   * value: "bigquery"
   * @const
   */
  "bigquery": "bigquery",

  /**
   * value: "cloudfiles"
   * @const
   */
  "cloudfiles": "cloudfiles",

  /**
   * value: "datadog"
   * @const
   */
  "datadog": "datadog",

  /**
   * value: "digitalocean"
   * @const
   */
  "digitalocean": "digitalocean",

  /**
   * value: "elasticsearch"
   * @const
   */
  "elasticsearch": "elasticsearch",

  /**
   * value: "ftp"
   * @const
   */
  "ftp": "ftp",

  /**
   * value: "gcs"
   * @const
   */
  "gcs": "gcs",

  /**
   * value: "googleanalytics"
   * @const
   */
  "googleanalytics": "googleanalytics",

  /**
   * value: "heroku"
   * @const
   */
  "heroku": "heroku",

  /**
   * value: "honeycomb"
   * @const
   */
  "honeycomb": "honeycomb",

  /**
   * value: "http"
   * @const
   */
  "http": "http",

  /**
   * value: "https"
   * @const
   */
  "https": "https",

  /**
   * value: "kafka"
   * @const
   */
  "kafka": "kafka",

  /**
   * value: "kinesis"
   * @const
   */
  "kinesis": "kinesis",

  /**
   * value: "logentries"
   * @const
   */
  "logentries": "logentries",

  /**
   * value: "loggly"
   * @const
   */
  "loggly": "loggly",

  /**
   * value: "logshuttle"
   * @const
   */
  "logshuttle": "logshuttle",

  /**
   * value: "newrelic"
   * @const
   */
  "newrelic": "newrelic",

  /**
   * value: "openstack"
   * @const
   */
  "openstack": "openstack",

  /**
   * value: "papertrail"
   * @const
   */
  "papertrail": "papertrail",

  /**
   * value: "pubsub"
   * @const
   */
  "pubsub": "pubsub",

  /**
   * value: "s3"
   * @const
   */
  "s3": "s3",

  /**
   * value: "scalyr"
   * @const
   */
  "scalyr": "scalyr",

  /**
   * value: "sftp"
   * @const
   */
  "sftp": "sftp",

  /**
   * value: "splunk"
   * @const
   */
  "splunk": "splunk",

  /**
   * value: "stackdriver"
   * @const
   */
  "stackdriver": "stackdriver",

  /**
   * value: "sumologic"
   * @const
   */
  "sumologic": "sumologic",

  /**
   * value: "syslog"
   * @const
   */
  "syslog": "syslog"
};
var _default = RateLimiterResponse;
exports["default"] = _default;