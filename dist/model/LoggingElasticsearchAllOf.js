"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingElasticsearchAllOf model module.
 * @module model/LoggingElasticsearchAllOf
 * @version 3.0.0-alpha1
 */
var LoggingElasticsearchAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingElasticsearchAllOf</code>.
   * @alias module:model/LoggingElasticsearchAllOf
   */
  function LoggingElasticsearchAllOf() {
    _classCallCheck(this, LoggingElasticsearchAllOf);

    LoggingElasticsearchAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingElasticsearchAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingElasticsearchAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingElasticsearchAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingElasticsearchAllOf} The populated <code>LoggingElasticsearchAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingElasticsearchAllOf();

        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('pipeline')) {
          obj['pipeline'] = _ApiClient["default"].convertToType(data['pipeline'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], Object);
        }
      }

      return obj;
    }
  }]);

  return LoggingElasticsearchAllOf;
}();
/**
 * The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, `#{%F}` will interpolate as `YYYY-MM-DD` with today's date.
 * @member {String} index
 */


LoggingElasticsearchAllOf.prototype['index'] = undefined;
/**
 * The URL to stream logs to. Must use HTTPS.
 * @member {String} url
 */

LoggingElasticsearchAllOf.prototype['url'] = undefined;
/**
 * The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html).
 * @member {String} pipeline
 */

LoggingElasticsearchAllOf.prototype['pipeline'] = undefined;
/**
 * Basic Auth username.
 * @member {String} user
 */

LoggingElasticsearchAllOf.prototype['user'] = undefined;
/**
 * Basic Auth password.
 * @member {String} password
 */

LoggingElasticsearchAllOf.prototype['password'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest.
 * @member {Object} format
 */

LoggingElasticsearchAllOf.prototype['format'] = undefined;
var _default = LoggingElasticsearchAllOf;
exports["default"] = _default;