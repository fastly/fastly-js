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
 * The Healthcheck model module.
 * @module model/Healthcheck
 * @version 3.0.0-alpha1
 */
var Healthcheck = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Healthcheck</code>.
   * @alias module:model/Healthcheck
   */
  function Healthcheck() {
    _classCallCheck(this, Healthcheck);

    Healthcheck.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Healthcheck, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Healthcheck</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Healthcheck} obj Optional instance to populate.
     * @return {module:model/Healthcheck} The populated <code>Healthcheck</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Healthcheck();

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

  return Healthcheck;
}();
/**
 * How often to run the healthcheck in milliseconds.
 * @member {Number} check_interval
 */


Healthcheck.prototype['check_interval'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

Healthcheck.prototype['comment'] = undefined;
/**
 * The status code expected from the host.
 * @member {Number} expected_response
 */

Healthcheck.prototype['expected_response'] = undefined;
/**
 * Which host to check.
 * @member {String} host
 */

Healthcheck.prototype['host'] = undefined;
/**
 * Whether to use version 1.0 or 1.1 HTTP.
 * @member {String} http_version
 */

Healthcheck.prototype['http_version'] = undefined;
/**
 * When loading a config, the initial number of probes to be seen as OK.
 * @member {Number} initial
 */

Healthcheck.prototype['initial'] = undefined;
/**
 * Which HTTP method to use.
 * @member {String} method
 */

Healthcheck.prototype['method'] = undefined;
/**
 * The name of the healthcheck.
 * @member {String} name
 */

Healthcheck.prototype['name'] = undefined;
/**
 * The path to check.
 * @member {String} path
 */

Healthcheck.prototype['path'] = undefined;
/**
 * How many healthchecks must succeed to be considered healthy.
 * @member {Number} threshold
 */

Healthcheck.prototype['threshold'] = undefined;
/**
 * Timeout in milliseconds.
 * @member {Number} timeout
 */

Healthcheck.prototype['timeout'] = undefined;
/**
 * The number of most recent healthcheck queries to keep for this healthcheck.
 * @member {Number} window
 */

Healthcheck.prototype['window'] = undefined;
var _default = Healthcheck;
exports["default"] = _default;