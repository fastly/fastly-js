"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipTlsDomainTlsDomain = _interopRequireDefault(require("./RelationshipTlsDomainTlsDomain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipCommonName model module.
 * @module model/RelationshipCommonName
 * @version 3.0.0-alpha1
 */
var RelationshipCommonName = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipCommonName</code>.
   * @alias module:model/RelationshipCommonName
   */
  function RelationshipCommonName() {
    _classCallCheck(this, RelationshipCommonName);

    RelationshipCommonName.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipCommonName, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipCommonName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipCommonName} obj Optional instance to populate.
     * @return {module:model/RelationshipCommonName} The populated <code>RelationshipCommonName</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipCommonName();

        if (data.hasOwnProperty('common_name')) {
          obj['common_name'] = _RelationshipTlsDomainTlsDomain["default"].constructFromObject(data['common_name']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipCommonName;
}();
/**
 * @member {module:model/RelationshipTlsDomainTlsDomain} common_name
 */


RelationshipCommonName.prototype['common_name'] = undefined;
var _default = RelationshipCommonName;
exports["default"] = _default;