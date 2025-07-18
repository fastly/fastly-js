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

import ApiClient from '../ApiClient';

/**
 * The RateLimiter model module.
 * @module model/RateLimiter
 * @version 12.1.0
 */
class RateLimiter {
    /**
     * Constructs a new <code>RateLimiter</code>.
     * @alias module:model/RateLimiter
     */
    constructor() { 
        
        RateLimiter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RateLimiter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RateLimiter} obj Optional instance to populate.
     * @return {module:model/RateLimiter} The populated <code>RateLimiter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RateLimiter();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uri_dictionary_name')) {
                obj['uri_dictionary_name'] = ApiClient.convertToType(data['uri_dictionary_name'], 'String');
            }
            if (data.hasOwnProperty('http_methods')) {
                obj['http_methods'] = ApiClient.convertToType(data['http_methods'], ['String']);
            }
            if (data.hasOwnProperty('rps_limit')) {
                obj['rps_limit'] = ApiClient.convertToType(data['rps_limit'], 'Number');
            }
            if (data.hasOwnProperty('window_size')) {
                obj['window_size'] = ApiClient.convertToType(data['window_size'], 'Number');
            }
            if (data.hasOwnProperty('client_key')) {
                obj['client_key'] = ApiClient.convertToType(data['client_key'], ['String']);
            }
            if (data.hasOwnProperty('penalty_box_duration')) {
                obj['penalty_box_duration'] = ApiClient.convertToType(data['penalty_box_duration'], 'Number');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], {'String': 'String'});
            }
            if (data.hasOwnProperty('response_object_name')) {
                obj['response_object_name'] = ApiClient.convertToType(data['response_object_name'], 'String');
            }
            if (data.hasOwnProperty('logger_type')) {
                obj['logger_type'] = ApiClient.convertToType(data['logger_type'], 'String');
            }
            if (data.hasOwnProperty('feature_revision')) {
                obj['feature_revision'] = ApiClient.convertToType(data['feature_revision'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A human readable name for the rate limiting rule.
 * @member {String} name
 */
RateLimiter.prototype['name'] = undefined;

/**
 * The name of a Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
 * @member {String} uri_dictionary_name
 */
RateLimiter.prototype['uri_dictionary_name'] = undefined;

/**
 * Array of HTTP methods to apply rate limiting to.
 * @member {Array.<module:model/RateLimiter.HttpMethodsEnum>} http_methods
 */
RateLimiter.prototype['http_methods'] = undefined;

/**
 * Upper limit of requests per second allowed by the rate limiter.
 * @member {Number} rps_limit
 */
RateLimiter.prototype['rps_limit'] = undefined;

/**
 * Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
 * @member {module:model/RateLimiter.WindowSizeEnum} window_size
 */
RateLimiter.prototype['window_size'] = undefined;

/**
 * Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
 * @member {Array.<String>} client_key
 */
RateLimiter.prototype['client_key'] = undefined;

/**
 * Length of time in minutes that the rate limiter is in effect after the initial violation is detected.
 * @member {Number} penalty_box_duration
 */
RateLimiter.prototype['penalty_box_duration'] = undefined;

/**
 * The action to take when a rate limiter violation is detected.
 * @member {module:model/RateLimiter.ActionEnum} action
 */
RateLimiter.prototype['action'] = undefined;

/**
 * Custom response to be sent when the rate limit is exceeded. Required if `action` is `response`.
 * @member {Object.<String, String>} response
 */
RateLimiter.prototype['response'] = undefined;

/**
 * Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
 * @member {String} response_object_name
 */
RateLimiter.prototype['response_object_name'] = undefined;

/**
 * Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
 * @member {module:model/RateLimiter.LoggerTypeEnum} logger_type
 */
RateLimiter.prototype['logger_type'] = undefined;

/**
 * Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
 * @member {Number} feature_revision
 */
RateLimiter.prototype['feature_revision'] = undefined;





/**
 * Allowed values for the <code>http_methods</code> property.
 * @enum {String}
 * @readonly
 */
RateLimiter['HttpMethodsEnum'] = {

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
RateLimiter['WindowSizeEnum'] = {

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
RateLimiter['ActionEnum'] = {

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
RateLimiter['LoggerTypeEnum'] = {

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
     * value: "newrelicotlp"
     * @const
     */
    "newrelicotlp": "newrelicotlp",

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



export default RateLimiter;

