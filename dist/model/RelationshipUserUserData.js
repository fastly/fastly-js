"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeUser = _interopRequireDefault(require("./TypeUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipUserUserData model module.
 * @module model/RelationshipUserUserData
 * @version 3.0.0-alpha1
 */
var RelationshipUserUserData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipUserUserData</code>.
   * @alias module:model/RelationshipUserUserData
   */
  function RelationshipUserUserData() {
    _classCallCheck(this, RelationshipUserUserData);

    RelationshipUserUserData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipUserUserData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipUserUserData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipUserUserData} obj Optional instance to populate.
     * @return {module:model/RelationshipUserUserData} The populated <code>RelationshipUserUserData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipUserUserData();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeUser["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RelationshipUserUserData;
}();
/**
 * @member {module:model/TypeUser} type
 */


RelationshipUserUserData.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying the user.
 * @member {String} id
 */

RelationshipUserUserData.prototype['id'] = undefined;
var _default = RelationshipUserUserData;
exports["default"] = _default;