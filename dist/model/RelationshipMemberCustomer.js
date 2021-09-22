"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeCustomer = _interopRequireDefault(require("./TypeCustomer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipMemberCustomer model module.
 * @module model/RelationshipMemberCustomer
 * @version 3.0.0-alpha1
 */
var RelationshipMemberCustomer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipMemberCustomer</code>.
   * @alias module:model/RelationshipMemberCustomer
   */
  function RelationshipMemberCustomer() {
    _classCallCheck(this, RelationshipMemberCustomer);

    RelationshipMemberCustomer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipMemberCustomer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipMemberCustomer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipMemberCustomer} obj Optional instance to populate.
     * @return {module:model/RelationshipMemberCustomer} The populated <code>RelationshipMemberCustomer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipMemberCustomer();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeCustomer["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipMemberCustomer;
}();
/**
 * Alphanumeric string identifying the customer.
 * @member {String} id
 */


RelationshipMemberCustomer.prototype['id'] = undefined;
/**
 * @member {module:model/TypeCustomer} type
 */

RelationshipMemberCustomer.prototype['type'] = undefined;
var _default = RelationshipMemberCustomer;
exports["default"] = _default;