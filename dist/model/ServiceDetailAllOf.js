"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NestedVersion = _interopRequireDefault(require("./NestedVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceDetailAllOf model module.
 * @module model/ServiceDetailAllOf
 * @version 3.0.0-alpha1
 */
var ServiceDetailAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceDetailAllOf</code>.
   * @alias module:model/ServiceDetailAllOf
   */
  function ServiceDetailAllOf() {
    _classCallCheck(this, ServiceDetailAllOf);

    ServiceDetailAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceDetailAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceDetailAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceDetailAllOf} obj Optional instance to populate.
     * @return {module:model/ServiceDetailAllOf} The populated <code>ServiceDetailAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceDetailAllOf();

        if (data.hasOwnProperty('active_version')) {
          obj['active_version'] = _NestedVersion["default"].constructFromObject(data['active_version']);
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _NestedVersion["default"].constructFromObject(data['version']);
        }
      }

      return obj;
    }
  }]);

  return ServiceDetailAllOf;
}();
/**
 * @member {module:model/NestedVersion} active_version
 */


ServiceDetailAllOf.prototype['active_version'] = undefined;
/**
 * @member {module:model/NestedVersion} version
 */

ServiceDetailAllOf.prototype['version'] = undefined;
var _default = ServiceDetailAllOf;
exports["default"] = _default;