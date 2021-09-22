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
 * The Gzip model module.
 * @module model/Gzip
 * @version 3.0.0-alpha1
 */
var Gzip = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Gzip</code>.
   * @alias module:model/Gzip
   */
  function Gzip() {
    _classCallCheck(this, Gzip);

    Gzip.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Gzip, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Gzip</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Gzip} obj Optional instance to populate.
     * @return {module:model/Gzip} The populated <code>Gzip</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Gzip();

        if (data.hasOwnProperty('cache_condition')) {
          obj['cache_condition'] = _ApiClient["default"].convertToType(data['cache_condition'], 'String');
        }

        if (data.hasOwnProperty('content_types')) {
          obj['content_types'] = _ApiClient["default"].convertToType(data['content_types'], 'String');
        }

        if (data.hasOwnProperty('extensions')) {
          obj['extensions'] = _ApiClient["default"].convertToType(data['extensions'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Gzip;
}();
/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */


Gzip.prototype['cache_condition'] = undefined;
/**
 * Space-separated list of content types to compress. If you omit this field a default list will be used.
 * @member {String} content_types
 */

Gzip.prototype['content_types'] = undefined;
/**
 * Space-separated list of file extensions to compress. If you omit this field a default list will be used.
 * @member {String} extensions
 */

Gzip.prototype['extensions'] = undefined;
/**
 * Name of the gzip configuration.
 * @member {String} name
 */

Gzip.prototype['name'] = undefined;
var _default = Gzip;
exports["default"] = _default;