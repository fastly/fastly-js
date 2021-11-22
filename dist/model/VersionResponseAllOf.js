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
 * The VersionResponseAllOf model module.
 * @module model/VersionResponseAllOf
 * @version 3.0.0-alpha1
 */
var VersionResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VersionResponseAllOf</code>.
   * @alias module:model/VersionResponseAllOf
   */
  function VersionResponseAllOf() {
    _classCallCheck(this, VersionResponseAllOf);

    VersionResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VersionResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VersionResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionResponseAllOf} obj Optional instance to populate.
     * @return {module:model/VersionResponseAllOf} The populated <code>VersionResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VersionResponseAllOf();

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VersionResponseAllOf;
}();
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */


VersionResponseAllOf.prototype['service_id'] = undefined;
var _default = VersionResponseAllOf;
exports["default"] = _default;