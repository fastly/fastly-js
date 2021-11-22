"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeTlsDomain = _interopRequireDefault(require("./TypeTlsDomain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipMemberTlsDomain model module.
 * @module model/RelationshipMemberTlsDomain
 * @version 3.0.0-alpha1
 */
var RelationshipMemberTlsDomain = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipMemberTlsDomain</code>.
   * @alias module:model/RelationshipMemberTlsDomain
   */
  function RelationshipMemberTlsDomain() {
    _classCallCheck(this, RelationshipMemberTlsDomain);

    RelationshipMemberTlsDomain.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipMemberTlsDomain, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipMemberTlsDomain</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipMemberTlsDomain} obj Optional instance to populate.
     * @return {module:model/RelationshipMemberTlsDomain} The populated <code>RelationshipMemberTlsDomain</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipMemberTlsDomain();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsDomain["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RelationshipMemberTlsDomain;
}();
/**
 * @member {module:model/TypeTlsDomain} type
 */


RelationshipMemberTlsDomain.prototype['type'] = undefined;
/**
 * The domain name.
 * @member {String} id
 */

RelationshipMemberTlsDomain.prototype['id'] = undefined;
var _default = RelationshipMemberTlsDomain;
exports["default"] = _default;