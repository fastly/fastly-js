"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingCommon = _interopRequireDefault(require("./LoggingCommon"));

var _LoggingKafkaAllOf = _interopRequireDefault(require("./LoggingKafkaAllOf"));

var _LoggingTlsCommon = _interopRequireDefault(require("./LoggingTlsCommon"));

var _LoggingUseTls = _interopRequireDefault(require("./LoggingUseTls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingKafka model module.
 * @module model/LoggingKafka
 * @version 3.0.0-alpha1
 */
var LoggingKafka = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingKafka</code>.
   * @alias module:model/LoggingKafka
   * @implements module:model/LoggingCommon
   * @implements module:model/LoggingTlsCommon
   * @implements module:model/LoggingKafkaAllOf
   */
  function LoggingKafka() {
    _classCallCheck(this, LoggingKafka);

    _LoggingCommon["default"].initialize(this);

    _LoggingTlsCommon["default"].initialize(this);

    _LoggingKafkaAllOf["default"].initialize(this);

    LoggingKafka.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingKafka, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingKafka</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingKafka} obj Optional instance to populate.
     * @return {module:model/LoggingKafka} The populated <code>LoggingKafka</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingKafka();

        _LoggingCommon["default"].constructFromObject(data, obj);

        _LoggingTlsCommon["default"].constructFromObject(data, obj);

        _LoggingKafkaAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('placement')) {
          obj['placement'] = _ApiClient["default"].convertToType(data['placement'], 'String');
        }

        if (data.hasOwnProperty('format_version')) {
          obj['format_version'] = _ApiClient["default"].convertToType(data['format_version'], 'Number');
        }

        if (data.hasOwnProperty('response_condition')) {
          obj['response_condition'] = _ApiClient["default"].convertToType(data['response_condition'], 'String');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('tls_ca_cert')) {
          obj['tls_ca_cert'] = _ApiClient["default"].convertToType(data['tls_ca_cert'], 'String');
        }

        if (data.hasOwnProperty('tls_client_cert')) {
          obj['tls_client_cert'] = _ApiClient["default"].convertToType(data['tls_client_cert'], 'String');
        }

        if (data.hasOwnProperty('tls_client_key')) {
          obj['tls_client_key'] = _ApiClient["default"].convertToType(data['tls_client_key'], 'String');
        }

        if (data.hasOwnProperty('tls_hostname')) {
          obj['tls_hostname'] = _ApiClient["default"].convertToType(data['tls_hostname'], 'String');
        }

        if (data.hasOwnProperty('topic')) {
          obj['topic'] = _ApiClient["default"].convertToType(data['topic'], 'String');
        }

        if (data.hasOwnProperty('brokers')) {
          obj['brokers'] = _ApiClient["default"].convertToType(data['brokers'], 'String');
        }

        if (data.hasOwnProperty('compression_codec')) {
          obj['compression_codec'] = _ApiClient["default"].convertToType(data['compression_codec'], 'String');
        }

        if (data.hasOwnProperty('required_acks')) {
          obj['required_acks'] = _ApiClient["default"].convertToType(data['required_acks'], 'Number');
        }

        if (data.hasOwnProperty('request_max_bytes')) {
          obj['request_max_bytes'] = _ApiClient["default"].convertToType(data['request_max_bytes'], 'Number');
        }

        if (data.hasOwnProperty('parse_log_keyvals')) {
          obj['parse_log_keyvals'] = _ApiClient["default"].convertToType(data['parse_log_keyvals'], 'Boolean');
        }

        if (data.hasOwnProperty('auth_method')) {
          obj['auth_method'] = _ApiClient["default"].convertToType(data['auth_method'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('use_tls')) {
          obj['use_tls'] = _LoggingUseTls["default"].constructFromObject(data['use_tls']);
        }
      }

      return obj;
    }
  }]);

  return LoggingKafka;
}();
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */


LoggingKafka.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingKafka.PlacementEnum} placement
 */

LoggingKafka.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingKafka.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

LoggingKafka.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingKafka.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

LoggingKafka.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */

LoggingKafka.prototype['tls_ca_cert'] = 'null';
/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */

LoggingKafka.prototype['tls_client_cert'] = 'null';
/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */

LoggingKafka.prototype['tls_client_key'] = 'null';
/**
 * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
 * @member {String} tls_hostname
 * @default 'null'
 */

LoggingKafka.prototype['tls_hostname'] = 'null';
/**
 * The Kafka topic to send logs to. Required.
 * @member {String} topic
 */

LoggingKafka.prototype['topic'] = undefined;
/**
 * A comma-separated list of IP addresses or hostnames of Kafka brokers. Required.
 * @member {String} brokers
 */

LoggingKafka.prototype['brokers'] = undefined;
/**
 * The codec used for compression of your logs.
 * @member {module:model/LoggingKafka.CompressionCodecEnum} compression_codec
 */

LoggingKafka.prototype['compression_codec'] = undefined;
/**
 * The number of acknowledgements a leader must receive before a write is considered successful.
 * @member {module:model/LoggingKafka.RequiredAcksEnum} required_acks
 * @default RequiredAcksEnum.one
 */

LoggingKafka.prototype['required_acks'] = undefined;
/**
 * The maximum number of bytes sent in one request. Defaults `0` (no limit).
 * @member {Number} request_max_bytes
 * @default 0
 */

LoggingKafka.prototype['request_max_bytes'] = 0;
/**
 * Enables parsing of key=value tuples from the beginning of a logline, turning them into [record headers](https://cwiki.apache.org/confluence/display/KAFKA/KIP-82+-+Add+Record+Headers).
 * @member {Boolean} parse_log_keyvals
 */

LoggingKafka.prototype['parse_log_keyvals'] = undefined;
/**
 * SASL authentication method.
 * @member {module:model/LoggingKafka.AuthMethodEnum} auth_method
 */

LoggingKafka.prototype['auth_method'] = undefined;
/**
 * SASL user.
 * @member {String} user
 */

LoggingKafka.prototype['user'] = undefined;
/**
 * SASL password.
 * @member {String} password
 */

LoggingKafka.prototype['password'] = undefined;
/**
 * @member {module:model/LoggingUseTls} use_tls
 */

LoggingKafka.prototype['use_tls'] = undefined; // Implement LoggingCommon interface:

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */

_LoggingCommon["default"].prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingCommon.PlacementEnum} placement
 */

_LoggingCommon["default"].prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingCommon.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

_LoggingCommon["default"].prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

_LoggingCommon["default"].prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

_LoggingCommon["default"].prototype['format'] = '%h %l %u %t "%r" %&gt;s %b'; // Implement LoggingTlsCommon interface:

/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */

_LoggingTlsCommon["default"].prototype['tls_ca_cert'] = 'null';
/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */

_LoggingTlsCommon["default"].prototype['tls_client_cert'] = 'null';
/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */

_LoggingTlsCommon["default"].prototype['tls_client_key'] = 'null';
/**
 * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
 * @member {String} tls_hostname
 * @default 'null'
 */

_LoggingTlsCommon["default"].prototype['tls_hostname'] = 'null'; // Implement LoggingKafkaAllOf interface:

/**
 * The Kafka topic to send logs to. Required.
 * @member {String} topic
 */

_LoggingKafkaAllOf["default"].prototype['topic'] = undefined;
/**
 * A comma-separated list of IP addresses or hostnames of Kafka brokers. Required.
 * @member {String} brokers
 */

_LoggingKafkaAllOf["default"].prototype['brokers'] = undefined;
/**
 * The codec used for compression of your logs.
 * @member {module:model/LoggingKafkaAllOf.CompressionCodecEnum} compression_codec
 */

_LoggingKafkaAllOf["default"].prototype['compression_codec'] = undefined;
/**
 * The number of acknowledgements a leader must receive before a write is considered successful.
 * @member {module:model/LoggingKafkaAllOf.RequiredAcksEnum} required_acks
 * @default RequiredAcksEnum.one
 */

_LoggingKafkaAllOf["default"].prototype['required_acks'] = undefined;
/**
 * The maximum number of bytes sent in one request. Defaults `0` (no limit).
 * @member {Number} request_max_bytes
 * @default 0
 */

_LoggingKafkaAllOf["default"].prototype['request_max_bytes'] = 0;
/**
 * Enables parsing of key=value tuples from the beginning of a logline, turning them into [record headers](https://cwiki.apache.org/confluence/display/KAFKA/KIP-82+-+Add+Record+Headers).
 * @member {Boolean} parse_log_keyvals
 */

_LoggingKafkaAllOf["default"].prototype['parse_log_keyvals'] = undefined;
/**
 * SASL authentication method.
 * @member {module:model/LoggingKafkaAllOf.AuthMethodEnum} auth_method
 */

_LoggingKafkaAllOf["default"].prototype['auth_method'] = undefined;
/**
 * SASL user.
 * @member {String} user
 */

_LoggingKafkaAllOf["default"].prototype['user'] = undefined;
/**
 * SASL password.
 * @member {String} password
 */

_LoggingKafkaAllOf["default"].prototype['password'] = undefined;
/**
 * @member {module:model/LoggingUseTls} use_tls
 */

_LoggingKafkaAllOf["default"].prototype['use_tls'] = undefined;
/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */

LoggingKafka['PlacementEnum'] = {
  /**
   * value: "none"
   * @const
   */
  "none": "none",

  /**
   * value: "waf_debug"
   * @const
   */
  "waf_debug": "waf_debug",

  /**
   * value: "null"
   * @const
   */
  "null": "null"
};
/**
 * Allowed values for the <code>format_version</code> property.
 * @enum {Number}
 * @readonly
 */

LoggingKafka['FormatVersionEnum'] = {
  /**
   * value: 1
   * @const
   */
  "v1": 1,

  /**
   * value: 2
   * @const
   */
  "v2": 2
};
/**
 * Allowed values for the <code>compression_codec</code> property.
 * @enum {String}
 * @readonly
 */

LoggingKafka['CompressionCodecEnum'] = {
  /**
   * value: "gzip"
   * @const
   */
  "gzip": "gzip",

  /**
   * value: "snappy"
   * @const
   */
  "snappy": "snappy",

  /**
   * value: "lz4"
   * @const
   */
  "lz4": "lz4",

  /**
   * value: "null"
   * @const
   */
  "null": "null"
};
/**
 * Allowed values for the <code>required_acks</code> property.
 * @enum {Number}
 * @readonly
 */

LoggingKafka['RequiredAcksEnum'] = {
  /**
   * value: 1
   * @const
   */
  "one": 1,

  /**
   * value: 0
   * @const
   */
  "none": 0,

  /**
   * value: -1
   * @const
   */
  "all": -1
};
/**
 * Allowed values for the <code>auth_method</code> property.
 * @enum {String}
 * @readonly
 */

LoggingKafka['AuthMethodEnum'] = {
  /**
   * value: "plain"
   * @const
   */
  "plain": "plain",

  /**
   * value: "scram-sha-256"
   * @const
   */
  "scram-sha-256": "scram-sha-256",

  /**
   * value: "scram-sha-512"
   * @const
   */
  "scram-sha-512": "scram-sha-512"
};
var _default = LoggingKafka;
exports["default"] = _default;