"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipCustomerCustomer = _interopRequireDefault(require("./RelationshipCustomerCustomer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipCustomer model module.
 * @module model/RelationshipCustomer
 * @version 3.0.0-alpha1
 */
var RelationshipCustomer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipCustomer</code>.
   * @alias module:model/RelationshipCustomer
   */
  function RelationshipCustomer() {
    _classCallCheck(this, RelationshipCustomer);

    RelationshipCustomer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipCustomer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipCustomer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipCustomer} obj Optional instance to populate.
     * @return {module:model/RelationshipCustomer} The populated <code>RelationshipCustomer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipCustomer();

        if (data.hasOwnProperty('customer')) {
          obj['customer'] = _RelationshipCustomerCustomer["default"].constructFromObject(data['customer']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipCustomer;
}();
/**
 * @member {module:model/RelationshipCustomerCustomer} customer
 */


RelationshipCustomer.prototype['customer'] = undefined;
var _default = RelationshipCustomer;
exports["default"] = _default;