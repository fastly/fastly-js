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
 * The ServiceCreateAllOf model module.
 * @module model/ServiceCreateAllOf
 * @version 3.0.0-alpha1
 */
var ServiceCreateAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceCreateAllOf</code>.
   * @alias module:model/ServiceCreateAllOf
   */
  function ServiceCreateAllOf() {
    _classCallCheck(this, ServiceCreateAllOf);

    ServiceCreateAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceCreateAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceCreateAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceCreateAllOf} obj Optional instance to populate.
     * @return {module:model/ServiceCreateAllOf} The populated <code>ServiceCreateAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceCreateAllOf();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ServiceCreateAllOf;
}();
/**
 * The type of this service.
 * @member {module:model/ServiceCreateAllOf.TypeEnum} type
 */


ServiceCreateAllOf.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ServiceCreateAllOf['TypeEnum'] = {
  /**
   * value: "vcl"
   * @const
   */
  "vcl": "vcl",

  /**
   * value: "wasm"
   * @const
   */
  "wasm": "wasm"
};
var _default = ServiceCreateAllOf;
exports["default"] = _default;