"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceAuthorizationResponseData = _interopRequireDefault(require("./ServiceAuthorizationResponseData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceAuthorizationsResponseAllOf model module.
 * @module model/ServiceAuthorizationsResponseAllOf
 * @version 3.0.0-alpha1
 */
var ServiceAuthorizationsResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceAuthorizationsResponseAllOf</code>.
   * @alias module:model/ServiceAuthorizationsResponseAllOf
   */
  function ServiceAuthorizationsResponseAllOf() {
    _classCallCheck(this, ServiceAuthorizationsResponseAllOf);

    ServiceAuthorizationsResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceAuthorizationsResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceAuthorizationsResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceAuthorizationsResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ServiceAuthorizationsResponseAllOf} The populated <code>ServiceAuthorizationsResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceAuthorizationsResponseAllOf();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_ServiceAuthorizationResponseData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ServiceAuthorizationsResponseAllOf;
}();
/**
 * @member {Array.<module:model/ServiceAuthorizationResponseData>} data
 */


ServiceAuthorizationsResponseAllOf.prototype['data'] = undefined;
var _default = ServiceAuthorizationsResponseAllOf;
exports["default"] = _default;