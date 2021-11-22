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
 * The SchemasHealthcheck model module.
 * @module model/SchemasHealthcheck
 * @version 3.0.0-alpha1
 */
var SchemasHealthcheck = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SchemasHealthcheck</code>.
   * @alias module:model/SchemasHealthcheck
   */
  function SchemasHealthcheck() {
    _classCallCheck(this, SchemasHealthcheck);

    SchemasHealthcheck.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SchemasHealthcheck, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SchemasHealthcheck</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasHealthcheck} obj Optional instance to populate.
     * @return {module:model/SchemasHealthcheck} The populated <code>SchemasHealthcheck</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SchemasHealthcheck();

        if (data.hasOwnProperty('check_interval')) {
          obj['check_interval'] = _ApiClient["default"].convertToType(data['check_interval'], 'Number');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('expected_response')) {
          obj['expected_response'] = _ApiClient["default"].convertToType(data['expected_response'], 'Number');
        }

        if (data.hasOwnProperty('host')) {
          obj['host'] = _ApiClient["default"].convertToType(data['host'], 'String');
        }

        if (data.hasOwnProperty('http_version')) {
          obj['http_version'] = _ApiClient["default"].convertToType(data['http_version'], 'String');
        }

        if (data.hasOwnProperty('initial')) {
          obj['initial'] = _ApiClient["default"].convertToType(data['initial'], 'Number');
        }

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('threshold')) {
          obj['threshold'] = _ApiClient["default"].convertToType(data['threshold'], 'Number');
        }

        if (data.hasOwnProperty('timeout')) {
          obj['timeout'] = _ApiClient["default"].convertToType(data['timeout'], 'Number');
        }

        if (data.hasOwnProperty('window')) {
          obj['window'] = _ApiClient["default"].convertToType(data['window'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SchemasHealthcheck;
}();
/**
 * How often to run the healthcheck in milliseconds.
 * @member {Number} check_interval
 */


SchemasHealthcheck.prototype['check_interval'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

SchemasHealthcheck.prototype['comment'] = undefined;
/**
 * The status code expected from the host.
 * @member {Number} expected_response
 */

SchemasHealthcheck.prototype['expected_response'] = undefined;
/**
 * Which host to check.
 * @member {String} host
 */

SchemasHealthcheck.prototype['host'] = undefined;
/**
 * Whether to use version 1.0 or 1.1 HTTP.
 * @member {String} http_version
 */

SchemasHealthcheck.prototype['http_version'] = undefined;
/**
 * When loading a config, the initial number of probes to be seen as OK.
 * @member {Number} initial
 */

SchemasHealthcheck.prototype['initial'] = undefined;
/**
 * Which HTTP method to use.
 * @member {String} method
 */

SchemasHealthcheck.prototype['method'] = undefined;
/**
 * The name of the healthcheck.
 * @member {String} name
 */

SchemasHealthcheck.prototype['name'] = undefined;
/**
 * The path to check.
 * @member {String} path
 */

SchemasHealthcheck.prototype['path'] = undefined;
/**
 * How many healthchecks must succeed to be considered healthy.
 * @member {Number} threshold
 */

SchemasHealthcheck.prototype['threshold'] = undefined;
/**
 * Timeout in milliseconds.
 * @member {Number} timeout
 */

SchemasHealthcheck.prototype['timeout'] = undefined;
/**
 * The number of most recent healthcheck queries to keep for this healthcheck.
 * @member {Number} window
 */

SchemasHealthcheck.prototype['window'] = undefined;
var _default = SchemasHealthcheck;
exports["default"] = _default;